/* Luxxata mini renderer: plain JavaScript, no external libraries.
   Renders each component's HTML template against its logic class and
   updates the page in place whenever state changes. */
(function () {
  'use strict';
  var registry = new Proxy({}, { get: function (_, k) { return (window.LX_COMPONENTS || {})[k]; } });
  var HTML_NS = 'http://www.w3.org/1999/xhtml';
  var HOLE = /\{\{\s*([^{}]+?)\s*\}\}/g;
  var WHOLE = /^\s*\{\{\s*([^{}]+?)\s*\}\}\s*$/;

  var dirty = new Set(), queued = false, pendingMounts = [];

  function schedule(inst) {
    if (inst.__dead) return;
    dirty.add(inst);
    if (!queued) { queued = true; Promise.resolve().then(flush); }
  }

  /* Base class for component logic (state, props, setState). */
  function DCLogic(props) { this.props = props || {}; }
  DCLogic.prototype.setState = function (p, cb) {
    var cur = this.state || {};
    var next = typeof p === 'function' ? p(cur, this.props) : p;
    if (next) this.state = Object.assign({}, cur, next);
    schedule(this);
    if (cb) cb();
  };
  DCLogic.prototype.forceUpdate = function () { schedule(this); };
  window.DCLogic = DCLogic;

  /* ---------- template parsing ---------- */
  function parse(name) {
    var c = registry[name];
    if (c.__root) return c.__root;
    var html = c.template.replace(/<(\/?)sc-(for|if)\b/g, function (m, slash, kind) {
      return '<' + slash + 'template' + (slash ? '' : ' data-sc="' + kind + '"');
    });
    c.__root = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html').body;
    return c.__root;
  }
  function kids(n) { return Array.prototype.slice.call(n.content ? n.content.childNodes : n.childNodes); }

  /* ---------- value lookup ---------- */
  function lookup(expr, scope) {
    expr = expr.trim();
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (expr === 'null' || expr === 'undefined') return undefined;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return parseFloat(expr);
    var parts = expr.split('.'), first = parts[0], val, found = false, i;
    for (i = scope.length - 1; i >= 0; i--) {
      var s = scope[i];
      if (s != null && Object.prototype.hasOwnProperty.call(Object(s), first)) { val = s[first]; found = true; break; }
      if (s != null && typeof s === 'object' && first in s) { val = s[first]; found = true; break; }
    }
    if (!found) return undefined;
    for (i = 1; i < parts.length; i++) { if (val == null) return undefined; val = val[parts[i]]; }
    return val;
  }
  function interp(str, scope) {
    var m = WHOLE.exec(str);
    if (m) return lookup(m[1], scope);
    return interpStr(str, scope);
  }
  function interpStr(str, scope) {
    return str.replace(HOLE, function (_, e) {
      var v = lookup(e, scope);
      return v == null || v === false ? '' : String(v);
    });
  }

  /* ---------- hover / active / focus styles ---------- */
  var styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  var hoverCache = {}, hoverN = 0;
  function pseudoClass(kind, css) {
    var key = kind + '|' + css;
    if (hoverCache[key]) return hoverCache[key];
    var cls = 'lxp' + hoverN++;
    var decl = css.split(';').map(function (d) { return d.trim(); }).filter(Boolean)
      .map(function (d) { return d + ' !important'; }).join(';');
    var sel = kind === 'before' || kind === 'after' ? '::' + kind : ':' + kind;
    styleEl.appendChild(document.createTextNode('.' + cls + sel + '{' + decl + '}\n'));
    return (hoverCache[key] = cls);
  }

  /* ---------- build real DOM from template ---------- */
  function camel(s) { return s.replace(/-([a-z])/g, function (m, c) { return c.toUpperCase(); }); }

  function build(node, scope, inst) {
    var i;
    if (node.nodeType === 3) return document.createTextNode(interpStr(node.data, scope));
    if (node.nodeType !== 1) return document.createDocumentFragment();
    var tag = node.localName, ns = node.namespaceURI, frag, sc = node.getAttribute('data-sc');

    if (tag === 'template' && sc === 'for') {
      frag = document.createDocumentFragment();
      var list = interp(node.getAttribute('list') || '', scope) || [];
      var as = node.getAttribute('as') || 'item';
      var children = kids(node);
      for (i = 0; i < list.length; i++) {
        var o = {}; o[as] = list[i]; o.$index = i;
        var s2 = scope.concat([o]);
        for (var j = 0; j < children.length; j++) frag.appendChild(build(children[j], s2, inst));
      }
      return frag;
    }
    if (tag === 'template' && sc === 'if') {
      frag = document.createDocumentFragment();
      if (interp(node.getAttribute('value') || '', scope)) {
        kids(node).forEach(function (c) { frag.appendChild(build(c, scope, inst)); });
      }
      return frag;
    }
    if (tag === 'dc-import') return buildChild(node, scope, inst);

    var el = ns === HTML_NS ? document.createElement(tag) : document.createElementNS(ns, tag);
    el.__h = {}; el.__p = {};
    var isForm = ns === HTML_NS && (tag === 'input' || tag === 'select' || tag === 'textarea');
    for (i = 0; i < node.attributes.length; i++) {
      var n = node.attributes[i].name, v = node.attributes[i].value, m;
      if (n.indexOf('hint-') === 0) continue;
      if ((m = /^style-(hover|active|focus|before|after)$/.exec(n))) {
        el.classList.add(pseudoClass(m[1], interpStr(v, scope)));
        continue;
      }
      if (/^on[a-z]+$/.test(n)) {
        var fn = interp(v, scope);
        if (typeof fn === 'function') {
          var ev = n.slice(2).toLowerCase();
          if (ev === 'change' && (tag === 'input' || tag === 'textarea')) {
            var ty = (node.getAttribute('type') || 'text').toLowerCase();
            if (ty !== 'checkbox' && ty !== 'radio' && ty !== 'file') ev = 'input';
          }
          el.__h[ev] = fn; el['on' + ev] = fn;
        }
        continue;
      }
      var hasHole = v.indexOf('{{') !== -1;
      if (ns === HTML_NS && (n === 'checked' || n === 'selected' || n === 'disabled' || n === 'hidden')) {
        el.__p[n] = hasHole ? !!interp(v, scope) : true;
        continue;
      }
      if (isForm && n === 'value') { var vv = interp(v, scope); el.__p.value = vv == null ? '' : String(vv); continue; }
      var val = interp(v, scope);
      if (val == null || val === false || typeof val === 'function' || typeof val === 'object') continue;
      if (val === true) val = '';
      el.setAttribute(n, String(val));
    }
    kids(node).forEach(function (c) { el.appendChild(build(c, scope, inst)); });
    applyProps(el, el.__p);
    return el;
  }

  function applyProps(el, p) {
    for (var k in p) { if (k === 'value') { if (el.value !== p.value) el.value = p.value; } else el[k] = p[k]; }
  }

  function buildChild(node, scope, inst) {
    var name = node.getAttribute('name'), props = {}, i;
    for (i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i];
      if (a.name === 'name' || a.name.indexOf('hint-') === 0 || a.name === 'style') continue;
      props[camel(a.name)] = interp(a.value, scope);
    }
    var key = name + ':' + (props.trip && props.trip.name ? props.trip.name : '');
    if (inst.__seen[key]) key += '#' + (inst.__n[key] = (inst.__n[key] || 1) + 1);
    inst.__seen[key] = true;
    var ch = inst.__kids[key];
    if (!ch) {
      ch = new registry[name].Logic(props);
      ch.__name = name; ch.__kids = {}; ch.__seen = {}; ch.__n = {};
      inst.__kids[key] = ch;
      pendingMounts.push(ch);
    } else ch.props = props;
    var w = document.createElement('div');
    w.setAttribute('data-dc', name);
    w.style.display = 'contents';
    w.__inst = ch; ch.liveRoot = w;
    w.appendChild(buildInstance(ch));
    return w;
  }

  function buildInstance(inst) {
    inst.__seen = {}; inst.__n = {};
    var vals = Object.assign({}, inst.props, inst.renderVals ? inst.renderVals() : {});
    var frag = document.createDocumentFragment();
    kids(parse(inst.__name)).forEach(function (c) { frag.appendChild(build(c, [vals], inst)); });
    Object.keys(inst.__kids).forEach(function (k) {
      if (!inst.__seen[k]) { unmount(inst.__kids[k]); delete inst.__kids[k]; }
    });
    return frag;
  }

  function unmount(inst) {
    inst.__dead = true;
    Object.keys(inst.__kids).forEach(function (k) { unmount(inst.__kids[k]); });
    if (inst.componentWillUnmount) inst.componentWillUnmount();
  }

  /* ---------- update the live DOM in place ---------- */
  function morphChildren(old, neu) {
    var o = Array.prototype.slice.call(old.childNodes), n = Array.prototype.slice.call(neu.childNodes), i;
    for (i = 0; i < n.length; i++) {
      if (i >= o.length) old.appendChild(n[i]); else morphNode(o[i], n[i]);
    }
    for (i = n.length; i < o.length; i++) old.removeChild(o[i]);
  }
  function morphNode(o, n) {
    if (o.nodeType !== n.nodeType || o.nodeName !== n.nodeName) { o.parentNode.replaceChild(n, o); return; }
    if (o.nodeType === 3) { if (o.data !== n.data) o.data = n.data; return; }
    if (o.nodeType !== 1) return;
    var i, a, k;
    for (i = o.attributes.length - 1; i >= 0; i--) { a = o.attributes[i]; if (!n.hasAttribute(a.name)) o.removeAttribute(a.name); }
    for (i = 0; i < n.attributes.length; i++) { a = n.attributes[i]; if (o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value); }
    var nh = n.__h || {}, oh = o.__h || {};
    for (k in nh) o['on' + k] = nh[k];
    for (k in oh) if (!(k in nh)) o['on' + k] = null;
    o.__h = nh;
    if (n.__inst) { n.__inst.liveRoot = o; o.__inst = n.__inst; }
    morphChildren(o, n);
    var np = n.__p || {}, op = o.__p || {};
    for (k in op) if (!(k in np) && k !== 'value') o[k] = false;
    applyProps(o, np);
    o.__p = np;
  }

  function flush() {
    queued = false;
    var list = Array.from(dirty); dirty.clear();
    list.forEach(function (inst) {
      if (inst.__dead) return;
      var neu = document.createElement('div');
      neu.appendChild(buildInstance(inst));
      morphChildren(inst.liveRoot, neu);
    });
    runMounts();
  }
  function runMounts() {
    while (pendingMounts.length) { var c = pendingMounts.shift(); if (c.componentDidMount) c.componentDidMount(); }
  }

  window.LX = {
    mount: function (name, container) {
      var inst = new registry[name].Logic({});
      inst.__name = name; inst.__kids = {}; inst.__seen = {}; inst.__n = {};
      inst.liveRoot = container;
      var neu = document.createElement('div');
      neu.appendChild(buildInstance(inst));
      container.innerHTML = '';
      while (neu.firstChild) container.appendChild(neu.firstChild);
      pendingMounts.push(inst);
      runMounts();
      return inst;
    }
  };
})();
