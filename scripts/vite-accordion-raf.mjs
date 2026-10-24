/**
 * Read accordion panel height before Starwind writes styles.
 * A scrollHeight read after those writes is the forced reflow on load.
 */
export function accordionRafPlugin() {
  return {
    name: 'accordion-raf-scrollheight',
    transform(code, id) {
      if (!id.includes('@starwind-ui') && !id.includes('starwind-ui')) return null;
      if (code.includes('/* accordion-raf */')) return null;

      const block = [
        'if (rendered || !initialAnimation) {',
        '    panel.style.removeProperty("animation");',
        '  } else {',
        '    panel.style.setProperty("animation", initialAnimation);',
        '  }',
        '  if (open) {',
        '    showElement(panel);',
        '  }',
        '  panel.style.setProperty(heightProperty, `${panel.scrollHeight}px`);',
      ].join('\n');
      if (!code.includes(block)) return null;

      const replacement = [
        'const __swReadH = panel.__swPanelH ?? panel.scrollHeight;',
        '  if (rendered || !initialAnimation) {',
        '    panel.style.removeProperty("animation");',
        '  } else {',
        '    panel.style.setProperty("animation", initialAnimation);',
        '  }',
        '  if (open) {',
        '    showElement(panel);',
        '  }',
        '  /* accordion-raf */panel.style.setProperty(heightProperty, `${__swReadH}px`);',
      ].join('\n');

      return { code: code.replace(block, replacement), map: null };
    },
  };
}
