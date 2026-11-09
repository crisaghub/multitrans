document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Lógica del Menú Hamburguesa en Móvil ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- 2. Lógica de Cambio de Imagen con Mezcla (Cross-fade) ---
  const featureItems = document.querySelectorAll('.feature-item');
  const screenFront = document.getElementById('app-screen-front');
  const screenBack = document.getElementById('app-screen-back');

  if (featureItems.length > 0 && screenFront && screenBack) {
    featureItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('active')) return;

        featureItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const newImageSrc = item.getAttribute('data-image');

        // Ponemos la nueva imagen en la capa de atrás
        screenBack.src = newImageSrc;

        // Preparamos la imagen frontal
        screenFront.style.transition = 'none';
        screenFront.style.opacity = '1';

        // Iniciamos el desvanecimiento de la capa frontal
        setTimeout(() => {
          screenFront.style.transition = 'opacity 0.4s ease-in-out';
          screenFront.classList.add('fade-out');
        }, 50);

        // Al finalizar el fundido, igualamos ambas imágenes
        setTimeout(() => {
          screenFront.src = newImageSrc;
          screenFront.classList.remove('fade-out');
        }, 450);
      });
    });
  }
});