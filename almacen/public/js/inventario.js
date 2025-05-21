document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioProducto');
  const tablaProductos = document.getElementById('tablaProductos').querySelector('tbody');
  const contadorProductos = document.getElementById('contadorProductos');
  
  let productos = [];

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recoger datos del formulario
    const id = document.getElementById('idProducto').value;
    const nombre = document.getElementById('nombreProducto').value;
    const categoria = document.getElementById('categoriaProducto').value;
    const precio = document.getElementById('precioProducto').value;
    const stock = document.getElementById('stockProducto').value;
    const vendidos = document.getElementById('vendidosProducto').value;
    const fechaLlegada = document.getElementById('fechaLlegadaProducto').value;
    const estado = document.getElementById('estadoProducto').value;

    // Crear objeto producto
    const producto = { id, nombre, categoria, precio, stock, vendidos, fechaLlegada, estado };
    productos.push(producto);

    // Actualizar la tabla
    agregarFilaTabla(producto);
    actualizarContador();

    // Resetear formulario
    formulario.reset();
  });

  function agregarFilaTabla(producto) {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>${producto.precio}</td>
      <td>${producto.stock}</td>
      <td>${producto.vendidos}</td>
      <td>${producto.fechaLlegada}</td>
      <td>${producto.estado}</td>
      <td>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
      </td>
    `;
    tablaProductos.appendChild(fila);

    // Eventos para botones de acción (editar/eliminar)
    const btnEditar = fila.querySelector('.editar');
    const btnEliminar = fila.querySelector('.eliminar');

    btnEditar.addEventListener('click', () => {
      // Implementa la lógica de edición
      alert(`Editar producto: ${producto.nombre}`);
    });

    btnEliminar.addEventListener('click', () => {
      fila.remove();
      productos = productos.filter(p => p.id !== producto.id);
      actualizarContador();
    });
  }

  function actualizarContador() {
    contadorProductos.textContent = productos.length;
  }
});
