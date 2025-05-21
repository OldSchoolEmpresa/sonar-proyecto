<?php
class Modelo {
    private $conexion;

    public function __construct() {
        include_once 'conexion.php';
        $this->conexion = new Conexion();
        $this->db = $this->conexion->conectar();
    }

    public function obtenerUsuarios() {
        $sql = "SELECT * FROM usuarios";
        $query = $this->db->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function agregarUsuario($nombre, $ciudad, $direccion, $telefono, $email, $contrasena) {
        $contrasenaHash = password_hash($contrasena, PASSWORD_BCRYPT);
        $sql = "INSERT INTO usuarios (nombre, ciudad, direccion, telefono, email, contrasena) VALUES (:nombre, :ciudad, :direccion, :telefono, :email, :contrasena)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':nombre' => $nombre,
            ':ciudad' => $ciudad,
            ':direccion' => $direccion,
            ':telefono' => $telefono,
            ':email' => $email,
            ':contrasena' => $contrasenaHash
        ]);
    }

    public function actualizarUsuario($id, $nombre, $ciudad, $direccion, $telefono, $email, $contrasena = null) {
        if ($contrasena) {
            $contrasenaHash = password_hash($contrasena, PASSWORD_BCRYPT);
            $sql = "UPDATE usuarios SET nombre = :nombre, ciudad = :ciudad, direccion = :direccion, telefono = :telefono, email = :email, contrasena = :contrasena WHERE id = :id";
            $stmt = $this->db->prepare($sql);
            return $stmt->execute([
                ':nombre' => $nombre,
                ':ciudad' => $ciudad,
                ':direccion' => $direccion,
                ':telefono' => $telefono,
                ':email' => $email,
                ':contrasena' => $contrasenaHash,
                ':id' => $id
            ]);
        } else {
            $sql = "UPDATE usuarios SET nombre = :nombre, ciudad = :ciudad, direccion = :direccion, telefono = :telefono, email = :email WHERE id = :id";
            $stmt = $this->db->prepare($sql);
            return $stmt->execute([
                ':nombre' => $nombre,
                ':ciudad' => $ciudad,
                ':direccion' => $direccion,
                ':telefono' => $telefono,
                ':email' => $email,
                ':id' => $id
            ]);
        }
    }

    public function eliminarUsuario($id) {
        $sql = "DELETE FROM usuarios WHERE id = :id";
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
  <title>Panel de Administración</title>
  <!-- Usamos Bootstrap 5.3 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Estilos personalizados para diseño oscuro -->
  <style>
  /* Variables de colores para facilitar cambios */
  :root {
    --bg-color:rgb(51, 51, 51);
    --container-bg: #1e1e1e;
    --header-gradient: linear-gradient(135deg, #1e1e1e, #000000);
    --accent-gradient: linear-gradient(135deg,rgb(0, 0, 0),rgb(0, 0, 0));
    --btn-gradient: linear-gradient(45deg, #03dac6, #00bcd4);
    --text-color: #e0e0e0;
    --shadow-color: rgba(0,0,0,0.5);
  }

  body {
    background: var(rgb(0, 0, 0));
    color: var( #1e1e1e);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* Encabezado con degradado oscuro */
  .header {
    background: var(--header-gradient);
    color: var(--text-color);
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 30px;
    text-align: center;
  }
  .header h1 {
    margin: 0;
    font-size: 2.5rem;
  }
  .header p {
    margin: 0;
    font-size: 1rem;
  }

  /* Botón con gradiente y sombra */
  .btn-custom {
    background: var(--btn-gradient);
    border: none;
    box-shadow: 0 4px 8px var(--shadow-color);
  }
  .btn-custom:hover {
    opacity: 0.85;
  }

  /* Contenedor de las tarjetas */
  .card-container {
    margin-bottom: 30px;
  }
  .card {
    border: none;
    border-radius: 10px;
    background: var(--container-bg);
    box-shadow: 0 2px 10px var(--shadow-color);
  }
  .card-header {
    background: var(--accent-gradient);
    color: #fff;
    font-weight: bold;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .card-body {
    background: var(--container-bg);
    color: var(--text-color);
  }
  .card-body p {
    margin: 0;
    font-size: 0.9rem;
  }
  .card-footer {
    background: var(--container-bg);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  /* Estilos para los formularios y modales (se mantiene el estilo de bootstrap con ligeros ajustes) */
  .modal-content {
    background: var(--container-bg);
    color: var(--text-color);
  }
  .modal-header, .modal-footer {
    border: none;
  }
  .btn-close {
    filter: invert(1);
  }
</style>
</head>
<body>

<div class="container mt-5">
  <!-- Encabezado principal - Opción 2: Diseño Centrado con Animación -->
  <div class="inventory-header" style="position: relative; padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; font-size: 2.8rem; color:  #000000; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block; position: relative;">
      Usuarios 
      <!-- Línea animada debajo del título -->
      <span style="position: absolute; left: 0; right: 0; bottom: -5px; height: 4px; background: #00bcd4; transform: scaleX(0); transform-origin: left; transition: transform 0.5s;"></span>
    </h1>
    <p style="margin: 15px 0 0; font-size: 1.2rem; color: #bbb;">Administra los usuarios</p>
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


    <!-- Botón Agregar Usuario -->
    <div class="mb-4 text-center">
      <button type="button" class="btn btn-custom text-white" data-bs-toggle="modal" data-bs-target="#addUserModal">
        Agregar Usuario
      </button>
    </div>

    <!-- Modal Agregar Usuario -->
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addUserModalLabel">Agregar Usuario</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="agregarUsuarioForm">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" name="nombre" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="ciudad" class="form-label">Ciudad</label>
                <input type="text" name="ciudad" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="direccion" class="form-label">Dirección</label>
                <input type="text" name="direccion" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="telefono" class="form-label">Teléfono</label>
                <input type="text" name="telefono" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" name="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="contrasena" class="form-label">Contraseña</label>
                <input type="password" name="contrasena" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-custom text-white w-100">Agregar Usuario</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Listado de Usuarios en formato de tarjetas -->
    <div class="row">
      <?php
      include_once '../modelo/modelo.php';
      $modelo = new Modelo();
      $usuarios = $modelo->obtenerUsuarios();

      foreach ($usuarios as $usuario) {
      ?>
        <div class="col-md-4 card-container" id="usuario_<?php echo $usuario['id']; ?>">
          <div class="card">
            <div class="card-header">
              <?php echo $usuario['nombre']; ?>
            </div>
            <div class="card-body">
              <p><strong>ID:</strong> <?php echo $usuario['id']; ?></p>
              <p><strong>Ciudad:</strong> <?php echo $usuario['ciudad']; ?></p>
              <p><strong>Dirección:</strong> <?php echo $usuario['direccion']; ?></p>
              <p><strong>Teléfono:</strong> <?php echo $usuario['telefono']; ?></p>
              <p><strong>Email:</strong> <?php echo $usuario['email']; ?></p>
              <p><strong>Contraseña:</strong> <?php echo $usuario['contrasena']; ?></p>
            </div>
            <div class="card-footer text-center">
              <button type="button" class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#editModal_<?php echo $usuario['id']; ?>">Editar</button>
              <button class="btn btn-danger" onclick="eliminarUsuario(<?php echo $usuario['id']; ?>)">Eliminar</button>
            </div>
          </div>
        </div>
        <!-- Modal Editar Usuario -->
        <div class="modal fade" id="editModal_<?php echo $usuario['id']; ?>" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">Editar Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="editarUsuarioForm_<?php echo $usuario['id']; ?>" onsubmit="editarUsuario(<?php echo $usuario['id']; ?>); return false;">
                  <input type="hidden" name="id" value="<?php echo $usuario['id']; ?>">
                  <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" name="nombre" class="form-control" value="<?php echo $usuario['nombre']; ?>" required>
                  </div>
                  <div class="mb-3">
                    <label for="ciudad" class="form-label">Ciudad</label>
                    <input type="text" name="ciudad" class="form-control" value="<?php echo $usuario['ciudad']; ?>" required>
                  </div>
                  <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" name="direccion" class="form-control" value="<?php echo $usuario['direccion']; ?>" required>
                  </div>
                  <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="text" name="telefono" class="form-control" value="<?php echo $usuario['telefono']; ?>" required>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" value="<?php echo $usuario['email']; ?>" required>
                  </div>
                  <div class="mb-3">
                    <label for="contrasena" class="form-label">Contraseña</label>
                    <input type="password" name="contrasena" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-warning">Actualizar datos</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      <?php
      }
      ?>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script>
    document.getElementById("agregarUsuarioForm").addEventListener("submit", function(e) {
      e.preventDefault();

      var formData = new FormData(this);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "../controlador/agregar.php", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "El Usuario Fue Registrado Correctamente",
            showConfirmButton: false,
            timer: 3000
          });
          document.getElementById("agregarUsuarioForm").reset();
          var modal = new bootstrap.Modal(document.getElementById('addUserModal'));
          modal.hide();
          location.reload();
        }
      };
      xhr.send(formData);
    });

    function editarUsuario(id) {
      Swal.fire({
        title: '¿Estás seguro de que quieres actualizar los datos?',
        text: "Los cambios se aplicarán al usuario.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, actualizar!'
      }).then((result) => {
        if (result.isConfirmed) {
          var form = document.getElementById("editarUsuarioForm_" + id);
          var formData = new FormData(form);
          var params = new URLSearchParams(formData).toString();

          var xhr = new XMLHttpRequest();
          xhr.open("POST", "../controlador/editar.php", true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "El Registro fue actualizado correctamente!",
                showConfirmButton: false,
                timer: 3000
              }).then(() => {
                location.reload();
              });
            }
          };
          xhr.send(params);
        }
      });
    }

    function eliminarUsuario(id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "../controlador/eliminar.php", true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "El Registro Fue Eliminado del Sistema",
                showConfirmButton: false,
                timer: 3000
              });
              document.getElementById("usuario_" + id).remove();
            }
          };
          xhr.send("id=" + id);
        }
      });
    }
  </script>
</body>
</html>