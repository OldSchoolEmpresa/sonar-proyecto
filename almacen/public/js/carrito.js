// carrito.js
// Único script de carrito: captura TODOS los botones, guarda en localStorage
// y muestra el sidebar con la papelera para eliminar.

document.addEventListener('DOMContentLoaded', () => {
  // 1) Inyectar estilos dinámicos
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* Estilos para el carrito de compras */
    #cart-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: 450px;
      height: 100%;
      background: #fff;
      box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.35s ease;
      z-index: 1100;
      font-family: 'Arial', sans-serif;
    }
    #cart-sidebar.cart-open { transform: translateX(0); }
    .cart-header {
      display: flex; justify-content: space-between; align-items: center;
      background: #000; color: #fff; padding: 25px; border-bottom: 1px solid #333;
    }
    .cart-header h2 { margin: 0; font-size: 1.8rem; font-weight: bold; }
    .cart-close { background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer; }
    .cart-close:hover { transform: scale(1.1); }
    .cart-items {
      padding: 25px; flex: 1; overflow-y: auto; background: #f9f9f9;
      list-style: none; margin: 0;
    }
    .carrito-item {
      display: flex; align-items: center; margin-bottom: 20px;
      padding-bottom: 20px; border-bottom: 1px solid #eee; position: relative;
    }
    .carrito-item img {
      width: 100px; height: 100px; object-fit: cover;
      margin-right: 20px; border-radius: 4px; border: 1px solid #ddd;
    }
    .item-info h4 { margin: 0 0 8px; font-size: 18px; color: #333; font-weight: bold; }
    .item-info p { margin: 5px 0; font-size: 15px; color: #666; }
    .item-info p strong { color: #000; font-weight: bold; }
    .item-remove {
      background: none; border: none; cursor: pointer; padding: 5px;
      position: absolute; top: 0; right: 0;
    }
    .item-remove svg { width: 24px; height: 24px; fill: #ff0000; transition: fill 0.2s; }
    .item-remove:hover svg { fill: #cc0000; }
    .cart-footer {
      padding: 25px; background: #fff; border-top: 1px solid #eee;
    }
    .cart-total {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 25px; font-size: 20px; font-weight: bold;
    }
    .checkout-btn {
      width: 100%; padding: 18px; background: #000; color: #fff;
      border: none; border-radius: 4px; font-size: 18px; font-weight: bold;
      cursor: pointer; text-transform: uppercase; letter-spacing: 1px;
    }
    .checkout-btn:hover { background: #333; }
    .cart-count {
      position: absolute; top: -8px; right: -8px; background: #ff0000;
      color: #fff; border-radius: 50%; width: 24px; height: 24px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: bold;
    }
    .cart-icon { position: relative; cursor: pointer; margin-left: 25px; font-size: 24px; }
    @media (max-width: 768px) {
      #cart-sidebar { width: 90%; }
      .carrito-item img { width: 80px; height: 80px; }
    }
  `;
  document.head.appendChild(styleEl);

  // 2) Estado inicial
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // 3) Refrescar UI
  function actualizarCarritoUI() {
    const lista = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');
    if (!lista || !total) return;
    lista.innerHTML = '';
    let suma = 0;

    carrito.forEach((p, i) => {
      const div = document.createElement('div');
      div.className = 'carrito-item';
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="item-info">
          <h4>${p.nombre}</h4>
          <p>Talla: ${p.talla} - Color: ${p.color}</p>
          <p>Cantidad: ${p.cantidad}</p>
          <p><strong>Subtotal: $${(p.precio * p.cantidad).toLocaleString('es-CO')}</strong></p>
        </div>
        <button class="item-remove" data-index="${i}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M135.2 17.7C140.5 7 151.8 0 164 0H284c12.2 0 23.5 7 28.8 17.7L320 32H432c8.8 
              0 16 7.2 16 16s-7.2 16-16 16H416l-21.2 372.5C393.6 474.5 
              362.9 512 320 512H128c-42.9 0-73.6-37.5-74.8-75.5L32 
              64H16C7.2 64 0 56.8 0 48s7.2-16 16-16H128l7.2-14.3zM112 
              96L132.4 448h183.2L336 96H112z"/>
          </svg>
        </button>
      `;
      lista.appendChild(div);
      suma += p.precio * p.cantidad;
    });

    total.textContent = `$${suma.toLocaleString('es-CO')} COP`;
    updateCartCounter();

    // Listener papelera
    document.querySelectorAll('.item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        carrito.splice(+btn.dataset.index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoUI();
      });
    });
  }

  // 4) Contador rojo
  function updateCartCounter() {
    const ctr = document.querySelector('.cart-count');
    if (!ctr) return;
    const cnt = carrito.reduce((a, p) => a + p.cantidad, 0);
    ctr.textContent = cnt;
    ctr.style.display = cnt > 0 ? 'flex' : 'none';
  }

  // 5) Abrir/cerrar sidebar
  const sidebar  = document.getElementById('cart-sidebar');
  const backdrop = document.getElementById('cart-backdrop');
  const btnClose = document.getElementById('btn-close-cart');
  const icon     = document.querySelector('.cart-icon');

  function openCart() {
    sidebar.classList.add('cart-open');
    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    sidebar.classList.remove('cart-open');
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  }

  icon?.addEventListener('click', openCart);
  btnClose?.addEventListener('click', closeCart);
  backdrop?.addEventListener('click', closeCart);

  // 6) Init
  actualizarCarritoUI();

  // 7) Capturar TODOS los botones “Agregar al carrito”
  document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.enabled !== 'true') {
        const selAlert = document.getElementById('selection-alert');
        if (selAlert) {
          selAlert.textContent = 'Seleccione color y talla';
          selAlert.style.display = 'block';
          setTimeout(() => {
            selAlert.style.display = 'none';
          }, 3000);
        }      
        return;
      }
      const prod = {
        id:       btn.dataset.id,
        nombre:   btn.dataset.name,
        precio:   parseFloat(btn.dataset.price),
        imagen:   btn.dataset.image,
        talla:    btn.dataset.size,
        color:    btn.dataset.color,
        cantidad: 1
      };
      const found = carrito.find(p =>
        p.id === prod.id &&
        p.talla === prod.talla &&
        p.color === prod.color
      );
      if (found) found.cantidad++;
      else carrito.push(prod);

      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarCarritoUI();
      openCart();
    });
  });
});
