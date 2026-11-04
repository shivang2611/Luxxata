// Indian mobile numbers: 10 digits starting 6–9, optionally written with +91, 91 or 0 in front.
export function indianMobile(raw) {
  let d = String(raw || '').replace(/\D/g, '');
  if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
  else if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? d : null;
}

export const isIndianMobile = (raw) => indianMobile(raw) !== null;

export const PHONE_HINT = 'Enter a 10-digit mobile number';
