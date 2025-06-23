// public/js/boston-imagenes.js


document.addEventListener('DOMContentLoaded', () => {
    const mainImage      = document.getElementById('mainImage');
    const addBtn         = document.querySelector('.btn-add-to-cart');
    const thumbnails     = document.querySelectorAll('.thumbnail-images img');
    const colorButtons   = document.querySelectorAll('.color-option');
    const sizeButtons    = document.querySelectorAll('.size-option');
    const alertBox       = document.getElementById('selection-alert');
  
    // Muestra un mensaje breve
    function showAlert(msg) {
      alertBox.textContent = msg;
      alertBox.style.display = 'block';
      setTimeout(() => alertBox.style.display = 'none', 2000);
    }
  
    // Activa/desactiva el botón Agregar
    function updateAddButton() {
      const ok = addBtn.dataset.color && addBtn.dataset.size;
      addBtn.disabled = !ok;
      addBtn.classList.toggle('not-enabled', !ok);
    }
  
    // Click en miniaturas
    thumbnails.forEach(img => {
      img.addEventListener('click', () => {
        const imgPath = img.dataset.image;
        const color   = img.dataset.color;
        mainImage.src        = imgPath;
        addBtn.dataset.image = imgPath;
        addBtn.dataset.color = color;
        // marca el circulito de color
        colorButtons.forEach(b => b.classList.toggle('active', b.dataset.color === color));
        updateAddButton();
      });
    });
  
    // Click en botones de color
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const imgPath = btn.dataset.image;
        const color   = btn.dataset.color;
        mainImage.src        = imgPath;
        addBtn.dataset.image = imgPath;
        addBtn.dataset.color = color;
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateAddButton();
      });
    });
  
    // Click en botones de talla
    const basePrice = parseInt(addBtn.dataset.price, 10) || 0;
    const sizes     = ['S','M','L','XL'];
    sizeButtons.forEach((btn, i) => {
      // rellena texto si está vacío
      if (!btn.textContent.trim()) btn.textContent = sizes[i] || '';
      btn.addEventListener('click', () => {
        const talla = btn.textContent;
        addBtn.dataset.size = talla;
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // ajusta precio si XL
        const precio = talla === 'XL' ? basePrice + 10000 : basePrice;
        addBtn.dataset.price = precio;
        document.querySelector('.discounted-price').textContent = `$${precio.toLocaleString()}`;
        updateAddButton();
      });
    });
  
    // Prevenir click sin selección
    addBtn.addEventListener('click', e => {
      if (addBtn.disabled) {
        e.preventDefault();
        showAlert('Seleccione color y talla');
      }
    });
  
    // Estado inicial
    addBtn.disabled = true;
    addBtn.classList.add('not-enabled');
  });
  