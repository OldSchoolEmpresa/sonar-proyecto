(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', initFiltering);

  function initFiltering() {
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const cards = Array.from(document.querySelectorAll('.producto-card'));

    // Inicializa: muestra todos y marca el botón activo
    setActiveButton(buttons.find(b => b.dataset.filter === 'all'));
    filterAndFade('all');

    // Asigna evento a cada botón
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        setActiveButton(btn);
        filterAndFade(category);
      });
    });

    // Marca visualmente el botón activo
    function setActiveButton(activeBtn) {
      buttons.forEach(b => b.classList.toggle('active', b === activeBtn));
    }

    // Filtra y aplica fade
    function filterAndFade(category) {
      cards.forEach(card => {
        const isVisible = (category === 'all' || card.dataset.category === category);
        if (isVisible) {
          fadeIn(card);
        } else {
          fadeOut(card);
        }
      });
    }

    // Efecto fadeOut
    function fadeOut(el) {
      el.style.transition = 'opacity 0.3s ease-out';
      el.style.opacity = '1';
      requestAnimationFrame(() => {
        el.style.opacity = '0';
        el.addEventListener('transitionend', () => {
          el.style.display = 'none';
        }, { once: true });
      });
    }

    // Efecto fadeIn (corregido)
    function fadeIn(el) {
      el.style.display = 'block'; // Asegura que esté visible
      el.style.transition = 'opacity 0.3s ease-in';
      el.style.opacity = '0';
      requestAnimationFrame(() => {
        el.style.opacity = '1';
      });
    }
  }
})();