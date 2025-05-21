// — Estado del carrito —
const cart = [];

// — Referencias DOM —
const btnAdds     = document.querySelectorAll('.btn-add-to-cart');
const btnOpen     = document.getElementById('btn-open-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const backdrop    = document.getElementById('cart-backdrop');
const btnClose    = document.getElementById('btn-close-cart');
const listItems   = document.getElementById('cart-items');
const spanTotal   = document.getElementById('cart-total');
const btnCheckout = document.getElementById('btn-checkout');

// Renderiza carrito
function renderCart() {
  listItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;

    listItems.innerHTML += `
      <li>
        <img src="${item.img}" alt="${item.name}" />
        <div class="item-info">
          <span class="name">${item.name}</span>
          <span class="qty">Cantidad: ${item.qty}</span>
        </div>
        <div class="item-actions">
          <span class="subtotal">${(item.price * item.qty).toLocaleString()} COP</span>
          <button data-idx="${idx}" class="btn-remove">×</button>
        </div>
      </li>
    `;
  });

  spanTotal.textContent = total.toLocaleString() + ' COP';

  // Eventos eliminar
  document.querySelectorAll('.btn-remove').forEach(btn =>
    btn.addEventListener('click', e => {
      cart.splice(+e.target.dataset.idx, 1);
      renderCart();
    })
  );
}

// Abrir / cerrar carrito
function openCart() {
  cartSidebar.classList.add('cart-open');
  backdrop.classList.add('visible');
}
function closeCart() {
  cartSidebar.classList.remove('cart-open');
  backdrop.classList.remove('visible');
}

// Listeners
btnAdds.forEach(btn =>
  btn.addEventListener('click', () => {
    const { id, name, price, img } = btn.dataset;
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty++;
    else cart.push({ id, name, price: +price, img, qty: 1 });
    renderCart();
    openCart();
  })
);
btnOpen && btnOpen.addEventListener('click', openCart);
btnClose.addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart);
btnCheckout.addEventListener('click', () => {
  alert(`Total a pagar: ${spanTotal.textContent}`);
});

// Inicializa
renderCart();
    