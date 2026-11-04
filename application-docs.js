(() => {
  const root = document.documentElement;
  const button = document.getElementById('document-theme');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  function apply(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    button.textContent = dark ? '라이트 모드' : '다크 모드';
    button.setAttribute('aria-label', button.textContent);
    button.setAttribute('aria-pressed', String(dark));
  }
  apply(saved === 'dark' || saved === 'light' ? saved : preference.matches ? 'dark' : 'light');
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    saved = theme;
    try { localStorage.setItem('theme', theme); } catch (_) {}
  });
  preference.addEventListener('change', event => {
    if (saved !== 'dark' && saved !== 'light') apply(event.matches ? 'dark' : 'light');
  });
  document.getElementById('document-print').addEventListener('click', () => window.print());
})();
