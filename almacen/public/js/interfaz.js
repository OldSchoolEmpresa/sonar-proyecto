
  (function(){
    // Asegurarse de que el DOM esté cargado
    document.addEventListener("DOMContentLoaded", function() {
      // Elementos de control
      const btnClose = document.getElementById('btn-close-cart');
      const cartSidebar = document.getElementById('cart-sidebar');
      const backdrop = document.getElementById('cart-backdrop');
      const cartItemsElement = document.getElementById('cart-items');
      const cartTotalElement = document.getElementById('cart-total');

      // Simulación de catálogo de productos (puedes agregar más productos si lo requieres)
      const productosCatalogo = [
        { id: 1, nombre: 'Producto A', precio: 15000, imagen: 'https://via.placeholder.com/60' }
      ];

      // Carrito de compras (array de productos con cantidad)
      let carrito = [];

      // Función para abrir el carrito
      function openCart() {
        cartSidebar.classList.add('cart-open');
        backdrop.classList.add('visible');
      }

      // Función para cerrar el carrito
      function closeCart() {
        cartSidebar.classList.remove('cart-open');
        backdrop.classList.remove('visible');
      }

      // Función para agregar un producto al carrito
      function agregarAlCarrito(producto) {
        // Verificar si el producto ya existe
        const productoExistente = carrito.find(item => item.id === producto.id);
        if (productoExistente) {
          productoExistente.cantidad += 1;
        } else {
          carrito.push({ ...producto, cantidad: 1 });
        }
        renderCarrito();
      }

      // Función para eliminar un producto del carrito
      function eliminarProducto(id) {
        carrito = carrito.filter(item => item.id !== id);
        renderCarrito();
      }

      // Función para renderizar items y actualizar el total
      function renderCarrito() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        carrito.forEach(item => {
          total += item.precio * item.cantidad;
          const li = document.createElement('li');
          li.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="item-info">
              <h4>${item.nombre}</h4>
              <p>Cantidad: ${item.cantidad}</p>
              <p>Subtotal: ${(item.precio * item.cantidad).toLocaleString()} COP</p>
            </div>
            <button class="item-remove" onclick="eliminarProducto(${item.id})">&times;</button>
          `;
          cartItemsElement.appendChild(li);
        });
        cartTotalElement.textContent = total.toLocaleString() + ' COP';
      }

      // Asociar los eventos para cerrar el carrito
      btnClose.addEventListener('click', closeCart);
      backdrop.addEventListener('click', closeCart);

      // Exponer la función eliminarProducto para usarla en el onclick inline
      window.eliminarProducto = eliminarProducto;

      // Simulación: Agregar un producto y abrir el carrito para la demostración
      // Puedes quitar esta parte en producción
      agregarAlCarrito(productosCatalogo[0]);
      openCart();
    });
  })();

