const toggleButton = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.getElementById('primary-nav');

if (toggleButton && primaryNav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    const willOpen = !isOpen;
    toggleButton.setAttribute('aria-expanded', String(willOpen));
    toggleButton.setAttribute(
      'aria-label',
      willOpen ? 'Navigationsmenü schließen' : 'Navigationsmenü öffnen'
    );
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('aria-label', 'Navigationsmenü öffnen');
      toggleButton.focus();
    }
  });

  // Active page indicator via JS (fallback for Tera variable scoping)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#primary-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPath && !link.hasAttribute('aria-current')) {
      link.setAttribute('aria-current', 'page');
    }
  });
}
