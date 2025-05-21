<?php
class Modelo {
    private $conexion;

    public function __construct() {
        include_once 'conexion.php';
        $this->conexion = new Conexion();
        $this->db = $this->conexion->conectar();
    }

    // Obtener todos los productos
    public function obtenerProductos() {
        $sql = "SELECT * FROM productos";
        $query = $this->db->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    // Agregar un nuevo producto
    public function agregarProducto($nombre, $descripcion, $precio, $stock, $categoria) {
        $sql = "INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES (:nombre, :descripcion, :precio, :stock, :categoria)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':nombre' => $nombre,
            ':descripcion' => $descripcion,
            ':precio' => $precio,
            ':stock' => $stock,
            ':categoria' => $categoria
        ]);
    }

    // Actualizar un producto
    public function actualizarProducto($id, $nombre, $descripcion, $precio, $stock, $categoria) {
        $sql = "UPDATE productos SET nombre = :nombre, descripcion = :descripcion, precio = :precio, stock = :stock, categoria = :categoria WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':nombre' => $nombre,
            ':descripcion' => $descripcion,
            ':precio' => $precio,
            ':stock' => $stock,
            ':categoria' => $categoria,
            ':id' => $id
        ]);
    }

    // Eliminar un producto
    public function eliminarProducto($id) {
        $sql = "DELETE FROM productos WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Inventario</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background: #f6f9fc;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .header {
      background: linear-gradient(135deg, rgb(102, 199, 255), rgb(255, 132, 94));
      color: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 30px;
      text-align: center;
    }
    .btn-custom {
      background: linear-gradient(45deg, rgb(255, 17, 0), rgb(62, 184, 255));
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .btn-custom:hover {
      opacity: 0.9;
    }
    .table-container {
      background: #fff;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <div class="container mt-5">
    <!-- Encabezado -->
    <div class="header">
      <h1>Gestión de Inventario</h1>
      <p>Administración de productos</p>
    </div>

    <!-- Botón Agregar Producto -->
    <div class="mb-4 text-center">
      <button type="button" class="btn btn-custom text-white" data-bs-toggle="modal" data-bs-target="#addProductModal">
        Agregar Producto
      </button>
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
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" name="nombre" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea name="descripcion" class="form-control" required></textarea>
              </div>
              <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input type="number" name="precio" class="form-control" step="0.01" required>
              </div>
              <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" name="stock" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <input type="text" name="categoria" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-custom text-white w-100">Agregar Producto</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla de Productos -->
    <div class="table-container">
      <table class="table mt-4 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tablaProductos">
          <?php
          include_once 'modelo.php';
          $modelo = new Modelo();
          $productos = $modelo->obtenerProductos();

          foreach ($productos as $producto) {
          ?>
            <tr id="producto_<?php echo $producto['id']; ?>">
              <td><?php echo $producto['id']; ?></td>
              <td><?php echo $producto['nombre']; ?></td>
              <td><?php echo $producto['descripcion']; ?></td>
              <td><?php echo $producto['precio']; ?></td>
              <td><?php echo $producto['stock']; ?></td>
              <td><?php echo $producto['categoria']; ?></td>
              <td>
                <div class="d-flex justify-content-between mt-2">
                  <button type="button" class="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target="#editModal_<?php echo $producto['id']; ?>">Editar</button>
                  <button class="btn btn-danger" onclick="eliminarProducto(<?php echo $producto['id']; ?>)">Eliminar</button>
                </div>
              </td>
            </tr>
          <?php
          }
          ?>
        </tbody>
      </table>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script>
    // Lógica para agregar, editar y eliminar productos
  </script>
</body>
</html>