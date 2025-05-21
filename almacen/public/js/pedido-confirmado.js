document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del DOM
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const orderForm = document.getElementById('order-form');
  
  // Cargar carrito desde localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
  // Función para formatear moneda
  function formatCurrency(amount) {
      return '$' + amount.toLocaleString('es-CO') + ' COP';
  }

  // Función para renderizar el carrito
  function renderCart() {
      cartItems.innerHTML = '';
      let total = 0;
      
      if (carrito.length === 0) {
          cartItems.innerHTML = `
              <tr>
                  <td colspan="7">
                      <div style="text-align:center; padding:20px; color:#666">
                          <i class="fas fa-shopping-cart" style="font-size:24px;"></i>
                          <p>No hay productos en tu pedido</p>
                      </div>
                  </td>
              </tr>
          `;
          cartTotal.textContent = formatCurrency(0);
          return;
      }
      
      carrito.forEach((item, index) => {
          // Corregir ruta de imagen si es necesario
          let imagenSrc = item.imagen;
          if (!imagenSrc.startsWith('http') && !imagenSrc.startsWith('/') && !imagenSrc.startsWith('asset/')) {
              imagenSrc = 'asset/img/' + imagenSrc;
          }
          
          const subtotal = item.precio * item.cantidad;
          total += subtotal;
          
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>
                  <div class="carrito-item">
                      <img src="${imagenSrc}" alt="${item.nombre}" onerror="this.src='https://via.placeholder.com/80?text=Imagen+no+disponible'">
                      <div class="item-info">
                          <h4>${item.nombre}</h4>
                          <p>Talla: ${item.talla || 'No especificada'}</p>
                          <p>Color: ${item.color || 'No especificado'}</p>
                          <p>Cantidad: ${item.cantidad}</p>
                          <p>Subtotal: ${formatCurrency(subtotal)}</p>
                      </div>
                  </div>
              </td>
          `;
          cartItems.appendChild(tr);
      });
      
      // Mostrar total
      cartTotal.textContent = formatCurrency(total);
  }
  
  // Manejar envío del formulario
  orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (carrito.length === 0) {
          alert('No hay productos en tu pedido');
          return;
      }
      
      // Recoger datos del formulario
      const orderData = {
          customer: {
              name: document.getElementById('fullName').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value,
              city: document.getElementById('city').value,
              address: document.getElementById('address').value,
              deliveryDate: document.getElementById('eta').value,
              paymentMethod: document.getElementById('payment').value
          },
          products: carrito,
          total: carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
      };
      
      console.log('Datos del pedido:', orderData);
      alert('Pedido confirmado correctamente');
      
      // Limpiar carrito después de confirmar
      localStorage.removeItem('carrito');
      
      // Redirigir a página de inicio
      window.location.href = '/';
  });
  
  // Configurar fecha mínima de entrega (hoy + 2 días)
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 2);
  document.getElementById('eta').min = minDate.toISOString().split('T')[0];
  
  // Inicializar
  renderCart();
});