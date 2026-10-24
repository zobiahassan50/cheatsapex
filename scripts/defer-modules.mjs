/**
 * Post-build: keep route JS off the initial critical request chain.
 * Module tags are injected after load so they do not compete with the LCP image.
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

const moduleScriptRe =
  /<script\b(?=[^>]*\btype=["']module["'])(?=[^>]*\bsrc=["']([^"']+)["'])[^>]*>\s*<\/script>/gi;

let converted = 0;
for (const file of walkHtml(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  const srcs = [];
  const next = html.replace(moduleScriptRe, (match, src) => {
    if (match.includes('data-keep-module')) return match;
    srcs.push(src);
    converted += 1;
    return '';
  });
  if (!srcs.length) continue;

  const loader = `<script>(function(){var s=${JSON.stringify(srcs)};var n=false;function l(){if(n)return;n=true;for(var i=0;i<s.length;i++){var e=document.createElement("script");e.type="module";e.src=s[i];document.body.appendChild(e)}}window.addEventListener("load",function(){if("requestIdleCallback"in window)requestIdleCallback(l,{timeout:1500});else setTimeout(l,1)})})();</script>`;
  const withLoader = next.includes('</body>')
    ? next.replace('</body>', `${loader}</body>`)
    : `${next}${loader}`;
  fs.writeFileSync(file, withLoader);
}

console.log(`defer-modules: deferred ${converted} module script(s)`);
