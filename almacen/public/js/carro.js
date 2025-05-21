 // carrito.js integrado
    document.addEventListener('DOMContentLoaded', () => {
      const addBtn = document.querySelector('.btn-add-to-cart');
      const cartIcon = document.querySelector('.cart-icon');
      const sidebar = document.getElementById('cart-sidebar');
      const backdrop = document.getElementById('cart-backdrop');
      const closeBtn = document.getElementById('btn-close-cart');
      const itemsContainer = document.getElementById('cart-items');
      const totalEl = document.getElementById('cart-total');
      const countEl = document.querySelector('.cart-count');

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const guardar = () => localStorage.setItem('carrito', JSON.stringify(carrito));

      const renderCart = () => {
        itemsContainer.innerHTML = '';
        let total = 0;
        carrito.forEach((p, i) => {
          const subtotal = p.precio * p.cantidad;
          total += subtotal;
          const div = document.createElement('div');
          div.className = 'carrito-item';
          div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="item-info">
              <h4>${p.nombre}</h4>
              <p>Talla: ${p.talla} - Color: ${p.color}</p>
              <p>Cantidad: ${p.cantidad}</p>
              <p>Subtotal: $${subtotal.toLocaleString('es-CO')} COP</p>
            </div>
            <button class="item-remove" data-index="${i}">×</button>
          `;
          div.querySelector('.item-remove').onclick = () => {
            carrito.splice(i, 1);
            guardar(); renderCart();
          };
          itemsContainer.appendChild(div);
        });
        totalEl.textContent = `$${total.toLocaleString('es-CO')} COP`;
        const cnt = carrito.reduce((s, x) => s + x.cantidad, 0);
        if (countEl) {
          countEl.textContent = cnt;
          countEl.style.display = cnt ? 'flex' : 'none';
        }
      };

      const openCart = () => { sidebar.classList.add('cart-open'); backdrop.classList.add('visible'); document.body.style.overflow = 'hidden'; };
      const closeCart = () => { sidebar.classList.remove('cart-open'); backdrop.classList.remove('visible'); document.body.style.overflow = ''; };

      cartIcon && cartIcon.addEventListener('click', openCart);
      closeBtn && closeBtn.addEventListener('click', closeCart);
      backdrop && backdrop.addEventListener('click', closeCart);

      addBtn && addBtn.addEventListener('click', e => {
        if (addBtn.dataset.enabled !== 'true') { alert('Seleccione color y talla'); return; }
        const prod = {
          id: addBtn.dataset.id,
          nombre: addBtn.dataset.name,
          precio: parseFloat(addBtn.dataset.price),
          imagen: addBtn.dataset.image,
          talla: addBtn.dataset.size,
          color: addBtn.dataset.color,
          cantidad: 1
        };
        const existe = carrito.find(x => x.id === prod.id && x.talla === prod.talla && x.color === prod.color);
        if (existe) existe.cantidad++; else carrito.push(prod);
        guardar(); renderCart(); openCart();
      });

      renderCart();
    });