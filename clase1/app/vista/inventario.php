<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Inventario</title>
  <!-- Bootstrap 5.3 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
   <link href="clase1/fontawesome/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  
  <style>
      /* Variables de colores para facilitar cambios */
      :root {
        --bg-color:rgb(255, 255, 255);
      --container-bg:rgb(0, 0, 0);
      --header-gradient: linear-gradient(135deg,rgb(0, 0, 0),rgb(0, 0, 0));
      --accent-gradient: linear-gradient(135deg, #03dac6, #bb86fc);
      --btn-gradient: linear-gradient(45deg, #03dac6, #bb86fc);
      --text-color:rgb(0, 0, 0);
      --shadow-color: rgba(255, 255, 255, 0.5);
    }
    nav.fixed-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: var(--container-bg);
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* Se establece white-space: nowrap para evitar que el contenido se envuelva en varias líneas */
      white-space: nowrap;
      /* Se aplican bordes redondeados solo en la parte inferior */
      border-radius: 0 0 5px 5px;
      margin: 0; /* Sin margen para estar pegado al tope */
    }
body {
  background: var(--bg-color);
  color: var(--text-color);
    background-image: url(''); 
    background-size: cover; 
    background-attachment: fixed;
    background-position: center; 
    background-repeat: no-repeat; 
    overflow-x: hidden;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding-top: 78px; /* Ajusta según la altura del navbar */
    }
  
a{
    text-decoration: none;
    color: inherit;
}
.header-categorias {
    text-align: center;
    padding: 2px;   
    border-radius: 15px;
    color: aqua; /* Color del texto */
    display: block; /* Para que funcione con margin: auto */
    margin: 2px auto;
    margin-top: -500px; /* Mueve hacia arriba */
}

.title {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1s ease-in-out;
    color: aqua;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

    
.header-image {
    width: 100vw; /* Ancho completo */
    height: 80vh; /* Altura ajustada */
    background-size: cover; /* Hace que la imagen cubra todo el área sin recortarse */
    background-position: center center; /* Centra la imagen de manera más precisa */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    display: flex;
    align-items: center;
    margin-top: -400px; /* Ajusta este valor según sea necesario */
    justify-content: center;
    object-fit: cover; /* Asegura que la imagen se ajuste sin distorsionarse */
}


header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000; 
    padding: 10px 20px;
    color: white;
}
.carousel-container {
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    position: relative;
    top: 0;
}

.slide {
    min-width: 100%;
    height: 100vh; /* Ajusta la altura */
    display: flex;
    align-items: center;
    justify-content: center; /* Centra las imágenes */
    
}

.slide img {
    width: 50%; /* Cada imagen ocupa la mitad del ancho */
    height: 100%; /* Ajusta la altura total */
    object-fit: cover; /* Se ajusta bien sin deformarse */
    margin: 0; /* Quita cualquier espacio entre imágenes */
    padding: 0;
    border-radius: 0; /* Sin bordes redondeados */
    
}


.nav-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.dot {
    width: 12px;
    height: 12px;
    margin: 5px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
    
}

.dot.active {
    opacity: 1;
    background: rgb(13, 207, 237);
    transform: scale(1.2) 
 
}

.nav-arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
}

.arrow {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    font-size: 22px;
    color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    transition: 0.3s ease;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.arrow:hover {
    background: white;
    color: black;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
}

.left {
    position: absolute;
    left: 15px;
}

.right {
    position: absolute;
    right: 15px;
}

.navbar123 {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
}
.logo-container {
    display: flex;
    justify-content: center; /* Centra el logo */
    align-items: center;
    height: 80px; /* Ajusta la altura según necesites */
}

.logo {
    width: 150px !important; /* Ajusta el tamaño del logo */
    height: auto !important; /* Mantiene la proporción */
    max-width: none !important; /* Evita que Bootstrap lo limite */
}

.company-name {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
}

.navbar {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos dentro del header se acomoden en más de una fila */
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
}

.menu-left,
.menu-right {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: auto; /* Empuja el menú hacia la derecha */
}

.menu-left li,
.menu-right li {
    margin: 0 15px;
}

.menu-left a,
.menu-right a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}   

.menu-left a:hover,
.menu-right a:hover {
    background-color: #444; /* Color de fondo al hacer hover */
}

.page-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    flex: 1;
}



.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 20px;
    margin: 0;
    margin-bottom: 50px;
}


    .categorias {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Define 2 columnas */
        gap: 20px; /* Espacio entre las celdas */
        margin-top: -400px
    }


h1 {
    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    animation: glow 2s ease-in-out infinite alternate;
    text-align: center;
    margin: 0;
    padding: 15px;
}

.contenido h3 {
    background-color: rgb(114, 114, 114); /* Color llamativo tipo etiqueta de precio */
    color: aqua; /* Color del texto */
    font-size: 1.1rem; /* Tamaño más grande para resaltar */
    font-weight: bold; /* Hace que se vea más llamativo */
    padding: 8px 12px; /* Espaciado interno */
    border-radius: 8px; /* Bordes redondeados */
    display: inline-block; /* Para que no ocupe todo el ancho */
    margin-top: 5px; /* Espaciado superior */
}

.intro {
    text-align: center;
    align-items: center;
    justify-content: center;
}

.imagenes {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.contenido {
    font-size: 1.0rem; /* Tamaño más grande para mejor visibilidad */
    font-weight: 600; /* Hace que resalte sin ser demasiado grueso */
    color: #333; /* Un color más suave y elegante */
    text-transform: uppercase; /* Para dar un estilo más moderno */
    letter-spacing: 1px; /* Espaciado entre letras */
    text-align: center; /* Centrar el texto */
    margin-top: 5px; /* Espaciado superior */
}

.box {
    width: 100%;
    max-width: 260px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.3); /* Efecto vidrio */
    backdrop-filter: blur(10px); /* Difuminado de fondo */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra elegante */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.box:hover {
    transform: scale(1.05); /* Efecto de agrandado al pasar el mouse */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.box img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.contenido {
    text-align: center;
    padding: 10px 0;
}

.contenido p {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contenido h3 {
    background: linear-gradient(45deg, aq, #000000);
    color: aqua;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 8px;
    display: inline-block;
    margin-top: 5px;
}

.contenedor {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(5, 1fr); /* Define 5 columnas */
    gap: 20px;
    padding: 20px;
    background-color: transparent;
    border: none; /* Elimina los bordes */
    box-shadow: none; /* Elimina sombras si las hay */
}
    .content {
        flex: 1; /* Empuja el footer hacia abajo */
    }
    .footer {
        position: relative; /* Se mantiene al final del contenido */
        width: 100%;
        background-color: #000000;
        color: #ffffff;
        padding: 10px;
        text-align: center;
        font-family: "Orbitron", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        margin-top: auto;
    }
    
    

.submit {
    background-color: rgba(133, 133, 133, 0.514);
}



.category {
    text-align: center;
    overflow: hidden;
    gap: 20px; /* Esto controla el espacio entre los productos */
    border: none; /* Asegúrate de que no haya bordes */
    background-color: transparent; /* No debe haber fondo */
    }
.category img {
    width: 100%; /* Hace que la imagen se ajuste al tamaño del contenedor */
    max-width: 500px;
    height: 500px; /* Define un alto uniforme */
    object-fit: cover; /* Asegura que la imagen se recorte y no se deforme */
    border-radius: 10px; /* Bordes redondeados para mejorar el diseño */
    transition: transform 0.3s ease;
    
}

.category img:hover {
    transform: scale(1.1);
}

.category a {
    display: block;
    margin-top: 1em;
    text-decoration: none;
    color: #fff6f6;
    font-size: 1.5em;
    font-weight: bold;
}

.category a:hover {
    color: #e31d1d;
}
.navbar ul {
    list-style-type: none;
    padding: 0;
}

.navbar li {
    display: inline;
    margin-right: 15px;
}

.navbar a {
    text-decoration: none;
    color: #ffffff;
}

.navbar img  {
    vertical-align: middle;
    width: 60px; 
    height: 40px; 
}
.Nosotros{
    color: #fafafa;
}
.Bienvenido{
    color: #fafafa;
}
.head{
    display: flex;
    align-items: center;
}
.offcanvas.offcanvas-end.text-bg-dark {
    background-color: black !important; /* Fondo negro */
    color: white !important; /* Texto blanco */
}

.offcanvas-title,
.offcanvas .nav-link,
.offcanvas .dropdown-item {
    color: white !important; /* Asegura que todas las letras sean blancas */
}

.offcanvas .dropdown-divider {
    border-color: white !important; /* Línea divisoria blanca */
}

.offcanvas .form-control {
    background-color: black !important; /* Fondo del input negro */
    color: white !important; /* Texto del input blanco */
    border: 1px solid white !important; /* Borde blanco */
}

.offcanvas .form-control::placeholder {
    color: rgba(255, 255, 255, 0.5) !important; /* Placeholder blanco con opacidad */
}

.offcanvas .btn-success {
    background-color: #28a745 !important; /* Color original de Bootstrap */
    border-color: #28a745 !important;
}


/* Media Query para pantallas de tamaño medio (tabletas) */
@media (max-width: 768px) {
    .categorias {
        grid-template-columns: repeat(2, 1fr);
    }

    .contenedor {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media Query para pantallas pequeñas (móviles) */
@media (max-width: 480px) {
    header {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .categorias {
        grid-template-columns: 1fr;
    }

    .contenedor {
        grid-template-columns: 1fr;
    }

    .logo {
        width: 40px;
        height: 40px;
    }

    .category img {
        width: 100%;
        height: auto;
    }
    
    .category p {
        font-size: 1em;
    }
}


/* Estilo para el título */
.header-image {
    width: 100vw;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 2rem; /* Tamaño grande */
    color: white; /* Color blanco */
    text-transform: uppercase; /* Texto en mayúsculas */
    text-align: center; /* Centrar el texto */
    font-weight: bold;
    margin: 1100;
    margin-top: 115vh; /* Espacio desde la parte superior de la página (ajusta según necesidad) */
}

/* Estilo para las categorías */
.categorias {
    display: flex;
    justify-content: space-around;
    padding: 250px;
}
.header-image {
    text-align: center;
    margin-bottom: 20px;
}

.categorias {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: nowrap;
    width: 100%;
}

.category {
    text-align: center;
    transition: transform 0.3s ease-in-out;
    width: 8000%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.category:hover {
    transform: scale(1.05);
}



.category p {
    margin-top: 10px;
    font-weight: bold;
    color: #fff;
}

.nueva-clase-titulo {
    color: white;               /* Cambia el color del texto a blanco */
    text-align: center;         /* Centra el texto */
    font-size: 43px;            /* Tamaño de fuente (ajústalo según tu preferencia) */
    margin: 20px 0;             /* Espacio alrededor del título (ajústalo según tu preferencia) */
}
    .header {
      background: linear-gradient(135deg, #00FFFF, #7FDBFF);
      color: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
    .header p {
      margin: 0;
      font-weight: bold;
    }
    .btn-custom {
      background: linear-gradient(45deg, #00FFFF, #7FDBFF);
      border: none;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      color: #fff;
      font-weight: bold;
    }
    .btn-custom:hover {
      opacity: 0.9;
    }
    .table-container {
      background: #fff;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    }
    .modal-header {
      background-color: #00FFFF;
      color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container mt-5">
  <!-- Encabezado principal - Opción 2: Diseño Centrado con Animación -->
  <div class="inventory-header" style="position: relative; padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 2.8rem; color: #000000 ; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block; position: relative;">
     Inventario
      <!-- Línea animada debajo del título -->
      <span style="position: absolute; left: 0; right: 0; bottom: -5px; height: 4px; background: #00bcd4; transform: scaleX(0); transform-origin: left; transition: transform 0.5s;"></span>
    </h1>
    <p style="margin: 15px 0 0; font-size: 1.2rem; color: #bbb;">Administra el inventario</p>
  </div>
</div>

<script>
  // Animación de subrayado al cargar la página
  window.addEventListener('load', () => {
    const underline = document.querySelector('.inventory-header h1 span');
    if (underline) {
      underline.style.transform = 'scaleX(1)';
    }
  });
</script>





    <!-- Botón Agregar Producto -->
    <div class="mb-4 text-center">
      <button type="button" class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#addProductModal">
        Agregar Producto
      </button>
    </div>
  
    <!-- Contenedor de la tabla -->
    <div class="table-container">
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Vendidos</th>
            <th>Fecha Llegada</th>
            <th>Fecha Salida</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        <?php
         include_once __DIR__ . '/../modelo/modelo_inventario.php';
          $modelo = new ModeloInventario();
          $productos = $modelo->obtenerProductos();
  
          foreach ($productos as $prod) {
        ?>
          <tr id="producto_<?php echo $prod['id']; ?>">
            <td><?php echo $prod['id']; ?></td>
            <td><?php echo $prod['Nombre']; ?></td>
            <td><?php echo $prod['Categoria']; ?></td>
            <td><?php echo $prod['Precio']; ?></td>
            <td><?php echo $prod['Stock']; ?></td>
            <td><?php echo $prod['Vendidos']; ?></td>
            <td><?php echo $prod['fecha_llegada']; ?></td>
            <td><?php echo $prod['fecha_salida']; ?></td>
            <td><?php echo ($prod['Estado'] == 1) ? 'Activo' : 'Inactivo'; ?></td>
            <td>
              <!-- Botón para editar (abre modal) -->
              <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editModal_<?php echo $prod['id']; ?>">
                Editar
              </button>
              <!-- Botón para eliminar -->
              <button class="btn btn-danger btn-sm" onclick="eliminarProducto(<?php echo $prod['id']; ?>)">
                Eliminar
              </button>
            </td>
          </tr>
  
          <!-- Modal Editar Producto -->
          <div class="modal fade" id="editModal_<?php echo $prod['id']; ?>" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Editar Producto (ID <?php echo $prod['id']; ?>)</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="editarProductoForm_<?php echo $prod['id']; ?>" onsubmit="editarProducto(<?php echo $prod['id']; ?>); return false;">
                    <input type="hidden" name="id" value="<?php echo $prod['id']; ?>">
                    <div class="mb-3">
  <label for="nombre" class="form-label">Nombre</label>
  <input id="nombre" type="text" name="Nombre" class="form-control" value="<?php echo $prod['Nombre']; ?>" required>
</div>

<div class="mb-3">
  <label for="categoria" class="form-label">Categoría</label>
  <input id="categoria" type="text" name="Categoria" class="form-control" value="<?php echo $prod['Categoria']; ?>" required>
</div>

<div class="mb-3">
  <label for="precio" class="form-label">Precio</label>
  <input id="precio" type="number" name="Precio" class="form-control" step="0.01" value="<?php echo $prod['Precio']; ?>" required>
</div>

<div class="mb-3">
  <label for="stock" class="form-label">Stock</label>
  <input id="stock" type="number" name="Stock" class="form-control" value="<?php echo $prod['Stock']; ?>" required>
</div>

<div class="mb-3">
  <label for="vendidos" class="form-label">Vendidos</label>
  <input id="vendidos" type="number" name="Vendidos" class="form-control" value="<?php echo $prod['Vendidos']; ?>" required>
</div>

<div class="mb-3">
  <label for="fecha_llegada" class="form-label">Fecha Llegada</label>
  <input id="fecha_llegada" type="date" name="fecha_llegada" class="form-control" value="<?php echo $prod['fecha_llegada']; ?>">
</div>

<div class="mb-3">
  <label for="fecha_salida" class="form-label">Fecha Salida</label>
  <input id="fecha_salida" type="date" name="fecha_salida" class="form-control" value="<?php echo $prod['fecha_salida']; ?>">
</div>

<div class="mb-3">
  <label for="estado" class="form-label">Estado</label>
  <select id="estado" name="Estado" class="form-select">
    <option value="1" <?php if($prod['Estado'] == 1) echo 'selected'; ?>>Activo</option>
    <option value="0" <?php if($prod['Estado'] == 0) echo 'selected'; ?>>Inactivo</option>
  </select>
</div>

                    <button type="submit" class="btn btn-warning w-100">Actualizar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <?php
          }
        ?>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- Modal Agregar Producto -->
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addProductModalLabel">Agregar Producto</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="agregarProductoForm">
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input type="text" name="Nombre" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Categoría</label>
              <input type="text" name="Categoria" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Precio</label>
              <input type="number" name="Precio" class="form-control" step="0.01" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Stock</label>
              <input type="number" name="Stock" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Vendidos</label>
              <input type="number" name="Vendidos" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha Llegada</label>
              <input type="date" name="fecha_llegada" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Fecha Salida</label>
              <input type="date" name="fecha_salida" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Estado</label>
              <select name="Estado" class="form-select">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
            </div>
            <button type="submit" class="btn btn-custom w-100">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  
  <script>
    // Agregar Producto
    document.getElementById("agregarProductoForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/laravel/clase1/app/controlador/agregar_inventario.php", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (xhr.responseText.trim() === "ok") {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "El producto fue agregado correctamente",
              showConfirmButton: false,
              timer: 3000
            }).then(() => {
              var modal = new bootstrap.Modal(document.getElementById('addProductModal'));
              modal.hide();
              location.reload();
            });
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Hubo un error al agregar el producto",
              showConfirmButton: false,
              timer: 3000
            });
          }
        }
      };
      xhr.send(formData);
    });
  
    // Editar Producto
    function editarProducto(id) {
      Swal.fire({
        title: '¿Actualizar este producto?',
        text: "Los cambios se guardarán en la base de datos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          const form = document.getElementById("editarProductoForm_" + id);
          const formData = new FormData(form);
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "/laravel/clase1/app/controlador/editar_inventario.php", true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.responseText.trim() === "ok") {
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Producto actualizado correctamente",
                  showConfirmButton: false,
                  timer: 3000
                }).then(() => {
                  location.reload();
                });
              } else {
                Swal.fire({
                  position: "top",
                  icon: "error",
                  title: "Hubo un error al actualizar",
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            }
          };
          xhr.send(formData);
        }
      });
    }
  
    // Eliminar Producto
    function eliminarProducto(id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "http://52.225.87.160/eliminar_inventario", true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              if (xhr.responseText.trim() === "ok") {
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Producto eliminado correctamente",
                  showConfirmButton: false,
                  timer: 3000
                });
                document.getElementById("producto_" + id).remove();
              } else {
                Swal.fire({
                  position: "top",
                  icon: "error",
                  title: "Error al eliminar el producto",
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            }
          };
          xhr.send("id=" + id);
        }
      });
    }
  </script>
</body>
</html>