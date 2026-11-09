document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.canva-card');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const dataElement = document.getElementById(modalId);

      if (dataElement) {
        modalTitle.textContent = dataElement.getAttribute('data-title');
        modalBody.innerHTML = dataElement.innerHTML;
        modalOverlay.classList.add('active');
      }
    });
  });

  // Cerrar modal al pulsar la 'X'
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  // Cerrar modal al pulsar fuera de la caja blanca
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // Cerrar modal con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace de navegación
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
});