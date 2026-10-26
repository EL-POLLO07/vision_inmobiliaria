document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.chat')?.addEventListener('click', () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  });
});
