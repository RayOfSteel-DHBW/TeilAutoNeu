const toggleButton = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.getElementById('primary-nav');

if (toggleButton && primaryNav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('hidden', isOpen);
  });
}
