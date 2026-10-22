/**
 * Post-build: convert render-blocking stylesheets to preload + onload swap.
 * Critical CSS is already inlined in BaseLayout — full CSS loads async.
 */
import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const dist = resolveDistDir();

function walkHtml(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkHtml(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const stylesheetRe =
  /<link(?=[^>]*\brel=["']stylesheet["'])(?=[^>]*\bhref=["']([^"']+\.css)["'])[^>]*>/gi;

let converted = 0;
for (const file of walkHtml(dist)) {
  let html = fs.readFileSync(file, 'utf8');
  const next = html.replace(stylesheetRe, (_match, href) => {
    if (
      _match.includes('data-deferred-css') ||
      _match.includes('media="print"') ||
      _match.includes("media='print'") ||
      href.includes('fonts.googleapis')
    ) {
      return _match;
    }
    converted += 1;
    return [
      `<link rel="preload" as="style" href="${href}" data-deferred-css onload="this.onload=null;this.rel='stylesheet'" />`,
      `<noscript><link rel="stylesheet" href="${href}" /></noscript>`,
    ].join('');
  });
  if (next !== html) fs.writeFileSync(file, next);
}

console.log(`defer-css: converted ${converted} stylesheet link(s)`);
