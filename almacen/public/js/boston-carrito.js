document.addEventListener('DOMContentLoaded', function() {
    // Carrito de compras
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Elementos importantes
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    const colorOptions = document.querySelectorAll('.color-option');
    const sizeOptions = document.querySelectorAll('.size-option');
    const mainImage = document.getElementById('mainImage');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartSidebar = document.getElementById('cart-sidebar');
    const btnCloseCart = document.getElementById('btn-close-cart');
    const cartIcon = document.querySelector('.cart-icon');
    
    // 1. Función para cambiar imagen al seleccionar color
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remover activo de todos
        colorOptions.forEach(opt => opt.classList.remove('active'));
        // Agregar activo al seleccionado
        this.classList.add('active');
        
        // Cambiar la imagen principal
        const newImage = this.getAttribute('data-image');
        mainImage.src = newImage;
        
        // Actualizar datos del botón
        if(addToCartBtn) {
          addToCartBtn.dataset.color = this.getAttribute('data-color');
          addToCartBtn.dataset.image = newImage;
        }
        
        checkEnableButton();
      });
    });
    
    // 2. Selección de tallas
    sizeOptions.forEach((option, index) => {
      // Asignar tallas si no las tienen
      if(!option.textContent.trim()) {
        option.textContent = ["S", "M", "L", "XL"][index];
      }
      
      option.addEventListener('click', function() {
        // Remover activo de todos
        sizeOptions.forEach(opt => opt.classList.remove('active'));
        // Agregar activo al seleccionado
        this.classList.add('active');
        
        // Actualizar datos del botón
        if(addToCartBtn) {
          addToCartBtn.dataset.size = this.textContent;
          
          // Ajustar precio si es XL
          let price = 120000;
          if(this.textContent === "XL") price += 10000;
          addToCartBtn.dataset.price = price;
          
          // Actualizar precio mostrado
          const priceDisplay = document.querySelector('.discounted-price');
          if(priceDisplay) priceDisplay.textContent = `$${price.toLocaleString()}`;
        }
        
        checkEnableButton();
      });
    });
    
    // 3. Función para habilitar/deshabilitar botón
    function checkEnableButton() {
      if(!addToCartBtn) return;
      
      if(addToCartBtn.dataset.color && addToCartBtn.dataset.size) {
        addToCartBtn.disabled = false;
        addToCartBtn.classList.remove('not-enabled');
      } else {
        addToCartBtn.disabled = true;
        addToCartBtn.classList.add('not-enabled');
      }
    }
    
    // 4. Agregar al carrito
    if(addToCartBtn) {
      addToCartBtn.addEventListener('click', function() {
        // Verificar que tenga color y talla
        if(!this.dataset.color || !this.dataset.size) {
          alert("Selecciona color y talla primero!");
          return;
        }
        
        // Crear objeto producto
        const producto = {
          id: this.dataset.id,
          nombre: this.dataset.name,
          precio: parseFloat(this.dataset.price),
          imagen: this.dataset.image,
          color: this.dataset.color,
          talla: this.dataset.size,
          cantidad: 1
        };
        
        // Verificar si ya existe en el carrito
        const existe = carrito.find(item => 
          item.id === producto.id && 
          item.color === producto.color && 
          item.talla === producto.talla
        );
        
        if(existe) {
          existe.cantidad += 1;
        } else {
          carrito.push(producto);
        }
        
        // Guardar en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        // Actualizar carrito
        updateCartUI();
        
        // Abrir carrito
        cartSidebar.classList.remove('cart-closed');
        cartSidebar.classList.add('cart-open');
      });
    }
    
    // 5. Actualizar interfaz del carrito
    function updateCartUI() {
      if(!cartItems || !cartTotal) return;
      
      cartItems.innerHTML = '';
      let total = 0;
      
      carrito.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
          <img src="${item.imagen}" width="50">
          <div>
            <h4>${item.nombre}</h4>
            <p>Color: ${item.color} | Talla: ${item.talla}</p>
            <p>$${item.precio.toLocaleString()} x ${item.cantidad}</p>
          </div>
          <button class="remove-item" data-index="${index}">X</button>
        `;
        cartItems.appendChild(itemElement);
        
        total += item.precio * item.cantidad;
      });
      
      cartTotal.textContent = `$${total.toLocaleString()}`;
      
      // Agregar eventos a botones de eliminar
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          carrito.splice(index, 1);
          localStorage.setItem('carrito', JSON.stringify(carrito));
          updateCartUI();
        });
      });
    }
    
    // 6. Funcionalidad del carrito
    if(cartIcon) {
      cartIcon.addEventListener('click', function() {
        cartSidebar.classList.remove('cart-closed');
        cartSidebar.classList.add('cart-open');
      });
    }
    
    if(btnCloseCart) {
      btnCloseCart.addEventListener('click', function() {
        cartSidebar.classList.remove('cart-open');
        cartSidebar.classList.add('cart-closed');
      });
    }
    
    // Inicializar
    updateCartUI();
    checkEnableButton();
  });