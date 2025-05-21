function checkEnableAddToCart() {
    const btn = document.querySelector('.btn-add-to-cart');
    const color = btn.dataset.color;
    const size = btn.dataset.size;
    const alert = document.getElementById('selection-alert');
  
    if (color && size) {
      btn.classList.remove('not-enabled');
      alert.classList.add('hidden');
    } else {
      btn.classList.add('not-enabled');
      alert.classList.remove('hidden');
    }
  }
  
  function createCartItemHTML(product) {
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <p>Color: ${product.color}</p>
          <p>Talla: ${product.size}</p>
          <p>Precio: $${Number(product.price).toLocaleString()}</p>
        </div>
      </div>
    `;
  }
  
  function openCartSidebar() {
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('cart-backdrop').classList.remove('hidden');
  }
  
  function closeCartSidebar() {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-backdrop').classList.add('hidden');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    const cartContent = document.getElementById('cart-content');
    const cartCount = document.getElementById('cart-count');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartIcon = document.getElementById('cart-icon');
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function updateCartUI() {
      cartContent.innerHTML = '';
      cart.forEach(product => {
        cartContent.innerHTML += createCartItemHTML(product);
      });
      cartCount.textContent = cart.length;
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    addToCartBtn.addEventListener('click', () => {
      if (addToCartBtn.classList.contains('not-enabled')) return;
  
      const product = {
        id: addToCartBtn.dataset.id,
        name: "Buzo Jordan",
        color: addToCartBtn.dataset.color,
        size: addToCartBtn.dataset.size,
        price: addToCartBtn.dataset.price,
        image: addToCartBtn.dataset.image,
      };
  
      cart.push(product);
      updateCartUI();
      openCartSidebar();
    });
  
    cartIcon.addEventListener('click', openCartSidebar);
    cartBackdrop.addEventListener('click', closeCartSidebar);
  
    updateCartUI();
  });
  