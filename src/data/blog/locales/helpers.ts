import type { BlogBlock } from '../types';

/** Tiny block builders used by the locale overlay files. */
export const p = (text: string): BlogBlock => ({ type: 'p', text });
export const h2 = (text: string): BlogBlock => ({ type: 'h2', text });
export const h3 = (text: string): BlogBlock => ({ type: 'h3', text });
export const ul = (...items: string[]): BlogBlock => ({ type: 'ul', items });
export const table = (headers: string[], rows: string[][]): BlogBlock => ({
  type: 'table',
  headers,
  rows,
});
export const cta = (title: string, text: string, href: string): BlogBlock => ({
  type: 'cta',
  title,
  text,
  href,
});
