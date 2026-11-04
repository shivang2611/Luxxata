// Value helpers matching the legacy template engine's interpolation rules.

// Text and string-attribute holes: null/undefined/false render as nothing.
export const t = (x) => (x == null || x === false ? '' : String(x));

// Whole-value attributes: functions, objects, null and false drop the attribute; true sets it empty.
export const at = (x) => {
  if (x == null || x === false || typeof x === 'function' || typeof x === 'object') return undefined;
  return x === true ? '' : String(x);
};
