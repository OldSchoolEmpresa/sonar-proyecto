// public/js/boston.js
(() => {
    document.addEventListener('DOMContentLoaded', () => {
      // ——— CONFIGURACIÓN INICIAL ———
      const mainImage     = document.getElementById('mainImage');
      const addBtn        = document.querySelector('.btn-add-to-cart');
      const thumbnails    = document.querySelectorAll('.thumbnail-images img');
      const colorButtons  = document.querySelectorAll('.color-option');
      const sizeButtons   = document.querySelectorAll('.size-option');
      const alertBox      = document.getElementById('selection-alert');
      const cartSidebar   = document.getElementById('cart-sidebar');
      const cartBackdrop  = document.getElementById('cart-backdrop');
      const cartCloseBtn  = document.getElementById('btn-close-cart');
      const cartIcon      = document.querySelector('.cart-icon');
      const cartItemsList = document.getElementById('cart-items');
      const cartTotalEl   = document.getElementById('cart-total');
  
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
      // ——— UTIL: Mostrar alerta temporal ———
      function showAlert(msg) {
        alertBox.textContent = msg;
        alertBox.style.display = 'block';
        setTimeout(() => alertBox.style.display = 'none', 3000);
      }
  
      // ——— UTIL: Habilitar/deshabilitar el botón Añadir ———
      function checkEnable() {
        const ok = !!(addBtn.dataset.color && addBtn.dataset.size);
        addBtn.disabled = !ok;
        addBtn.classList.toggle('not-enabled', !ok);
      }
  
      // ——— FUNCIONES CARRITO ———
      function actualizarCarritoUI() {
        cartItemsList.innerHTML = '';
        let total = 0;
        carrito.forEach((p, i) => {
          const item = document.createElement('div');
          item.className = 'carrito-item';
          item.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="item-info">
              <h4>${p.nombre}</h4>
              <p>Talla: ${p.talla} - Color: ${p.color}</p>
              <p>Cantidad: ${p.cantidad}</p>
              <p><strong>Subtotal: $${(p.precio * p.cantidad).toLocaleString('es-CO')}</strong></p>
            </div>
            <button class="item-remove" data-index="${i}">🗑️</button>
          `;
          cartItemsList.appendChild(item);
          total += p.precio * p.cantidad;
  
          item.querySelector('.item-remove').addEventListener('click', () => {
            carrito.splice(i, 1);
            persistAndRender();
          });
        });
        cartTotalEl.innerHTML = `<span>Total:</span> <span>$${total.toLocaleString('es-CO')} COP</span>`;
        updateCartCounter();
      }
  
      function updateCartCounter() {
        const counter = document.querySelector('.cart-count');
        const sum = carrito.reduce((acc, p) => acc + p.cantidad, 0);
        counter.textContent = sum;
        counter.style.display = sum > 0 ? 'flex' : 'none';
      }
  
      function persistAndRender() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
      }
  
      function openCart() {
        cartSidebar.classList.add('cart-open');
        cartBackdrop.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }
  
      function closeCart() {
        cartSidebar.classList.remove('cart-open');
        cartBackdrop.classList.remove('visible');
        document.body.style.overflow = '';
      }
  
      // ——— EVENTOS CARRITO ———
      if (cartIcon) cartIcon.addEventListener('click', openCart);
      cartCloseBtn.addEventListener('click', closeCart);
      cartBackdrop.addEventListener('click', closeCart);
  
      // ——— INTERACCIÓN THUMBNAILS ———
      thumbnails.forEach(img => {
        img.addEventListener('click', () => {
          const imgPath = img.dataset.image;
          const color   = img.dataset.color;
          mainImage.src        = imgPath;
          addBtn.dataset.image = imgPath;
          addBtn.dataset.color = color;
          colorButtons.forEach(b => b.dataset.color === color
            ? b.classList.add('active')
            : b.classList.remove('active')
          );
          checkEnable();
        });
      });
  
      // ——— INTERACCIÓN BOTONES DE COLOR ———
      colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const { image, color } = btn.dataset;
          mainImage.src        = image;
          addBtn.dataset.image = image;
          addBtn.dataset.color = color;
          colorButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          checkEnable();
        });
      });
  
      // ——— INTERACCIÓN BOTONES DE TALLA ———
      const precioBase = parseInt(addBtn.dataset.price, 10);
      const tallas     = ['S','M','L','XL'];
      sizeButtons.forEach((btn, idx) => {
        if (!btn.textContent.trim()) btn.textContent = tallas[idx] || '';
        btn.addEventListener('click', () => {
          const talla = btn.textContent;
          addBtn.dataset.size = talla;
          sizeButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const precio = (talla === 'XL') ? precioBase + 10000 : precioBase;
          addBtn.dataset.price = precio;
          document.querySelector('.discounted-price')
                  .textContent = `$${precio.toLocaleString()}`;
          checkEnable();
        });
      });
  
      // ——— AGREGAR AL CARRITO ———
      addBtn.addEventListener('click', e => {
        if (addBtn.disabled) {
          e.preventDefault();
          showAlert('Seleccione color y talla');
          return;
        }
        const producto = {
          id:       addBtn.dataset.id,
          nombre:   addBtn.dataset.name,
          precio:   parseFloat(addBtn.dataset.price),
          imagen:   addBtn.dataset.image,
          talla:    addBtn.dataset.size,
          color:    addBtn.dataset.color,
          cantidad: 1
        };
        // si ya existe mismo id+talla+color, sumo cantidad
        const existente = carrito.find(p =>
          p.id === producto.id &&
          p.talla === producto.talla &&
          p.color === producto.color
        );
        if (existente) existente.cantidad++;
        else carrito.push(producto);
  
        persistAndRender();
        openCart();
      });
  
      // ——— INICIALIZAR ———
      addBtn.disabled = true;
      addBtn.classList.add('not-enabled');
      persistAndRender();
      checkEnable();
    });
  })();
  