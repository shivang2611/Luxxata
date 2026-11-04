import { COLLS, TRIPS } from './data';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const PATHS = {
  home: '/',
  collections: '/collections',
  catalogue: '/trips',
  finder: '/find-your-egypt',
  enquiry: '/plan-my-trip',
};

// Legacy page name + state -> URL.
export function pathFor(page, s = {}) {
  if (page === 'trip') return '/trips/' + s.trip;
  if (page === 'collection') return '/collections/' + s.coll;
  return PATHS[page] || '/';
}

// URL -> the legacy page state it replaces.
export function routeFor(pathname) {
  const [a, b] = (pathname || '/').split('/').filter(Boolean);
  if (!a) return { page: 'home' };
  if (a === 'trips' && b) return TRIPS.some((t) => t.id === b) ? { page: 'trip', trip: b } : { page: 'notfound' };
  if (a === 'collections' && b) return COLLS.some((c) => c.id === b) ? { page: 'collection', coll: b } : { page: 'notfound' };
  const page = Object.keys(PATHS).find((k) => PATHS[k] === '/' + a);
  return { page: page && !b ? page : 'notfound' };
}
