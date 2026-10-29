document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.chat')?.addEventListener('click', () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.lead-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.querySelector('button').textContent = '¡Listo!';
  });

  document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.querySelector('button').textContent = 'Mensaje enviado';
  });
});
