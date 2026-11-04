// Value helpers matching the legacy template engine's interpolation rules.
// `$`-prefixed so template loop variables (e.g. `t`) can't shadow them.

// Text and string-attribute holes: null/undefined/false render as nothing.
export const $t = (x) => (x == null || x === false ? '' : String(x));

// Whole-value attributes: functions, objects, null and false drop the attribute; true sets it empty.
export const $at = (x) => {
  if (x == null || x === false || typeof x === 'function' || typeof x === 'object') return undefined;
  return x === true ? '' : String(x);
};

// A hole that supplies whole declarations (e.g. "left:3.6cqw") -> a React style object.
export const $css = (x) => {
  const out = {};
  for (const d of $t(x).split(';')) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const k = d.slice(0, i).trim();
    if (k) out[k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim();
  }
  return out;
};
