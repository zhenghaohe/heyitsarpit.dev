(function () {
  const ls = localStorage.getItem('COLOR_THEME');
  const pcs = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  const root = window.document.documentElement;

  if (ls && (ls === 'dark' || ls === 'light')) {
    root.setAttribute('data-theme', ls);
    return;
  }
  if (pcs) {
    root.setAttribute('data-theme', 'light');
    return;
  }
})();
