/**
 * Vite plugin: wrap Starwind collapsible panel height reads in double-rAF
 * so scrollHeight + style writes don't force synchronous reflow on the critical path.
 */
export function accordionRafPlugin() {
  return {
    name: 'accordion-raf-scrollheight',
    transform(code, id) {
      const isStarwind =
        id.includes('@starwind-ui') ||
        id.includes('starwind-ui') ||
        id.includes('chunk-EUW5OWKV') ||
        id.includes('collapsible-panel');
      if (!isStarwind) return null;
      if (!code.includes('scrollHeight')) return null;
      if (code.includes('/* accordion-raf */')) return null;

      // Exact Starwind collapsible pattern (pre-minify)
      const next = code.replace(
        /(\w+)\.style\.setProperty\((\w+),\s*`\$\{\1\.scrollHeight\}px`\);/g,
        (match, el, prop) => {
          if (match.includes('requestAnimationFrame')) return match;
          return (
            `/* accordion-raf */requestAnimationFrame(()=>{requestAnimationFrame(()=>{` +
            `${el}.style.setProperty(${prop},\`\${${el}.scrollHeight}px\`);` +
            `});});`
          );
        },
      );

      if (next === code) return null;
      return { code: next, map: null };
    },
  };
}
