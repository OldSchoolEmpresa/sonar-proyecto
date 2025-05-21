<?php
// ganancias.php
session_start();
// *** Aquí tu lógica real de autenticación ***
if (!isset($_SESSION['admin'])) {
    $_SESSION['admin'] = true;
}

// CONEXIÓN
require_once __DIR__ . '/../modelo/conexion.php';  // ← Ruta corregida
$db   = new Conexion();
$conn = $db->conectar();

// PROCESAMIENTO POST (insertar / actualizar)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id     = $_POST['id_transaccion'] ?? null;
    $fecha  = $_POST['fecha'];
    $tipo   = $_POST['tipo'];
    $cat    = $_POST['categoria'];
    $desc   = $_POST['descripcion'];
    $monto  = $_POST['monto'];
    $met    = $_POST['metodo_pago'];
    $ref    = $_POST['referencia'];

    if ($id) {
        // UPDATE
        $stmt = $conn->prepare("
            UPDATE transacciones
               SET fecha=?, tipo=?, categoria=?, descripcion=?, monto=?, metodo_pago=?, referencia=?
             WHERE id_transaccion=?
        ");
        $stmt->execute([$fecha, $tipo, $cat, $desc, $monto, $met, $ref, $id]);
    } else {
        // INSERT
        $stmt = $conn->prepare("
            INSERT INTO transacciones
            (fecha, tipo, categoria, descripcion, monto, metodo_pago, referencia)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ");
        $stmt->execute([$fecha, $tipo, $cat, $desc, $monto, $met, $ref]);
    }
    header('Location: ganancias.php?status=success');
    exit;
}

// BORRAR
if (isset($_GET['delete'])) {
    $del = (int)$_GET['delete'];
    $conn->query("DELETE FROM transacciones WHERE id_transaccion = $del");
    header('Location: ganancias.php');
    exit;
}

//  Totales
$ing  = (float) $conn
    ->query("SELECT IFNULL(SUM(monto),0) AS total FROM transacciones WHERE tipo='ingreso'")
    ->fetch(PDO::FETCH_ASSOC)['total'];
$gas  = (float) $conn
    ->query("SELECT IFNULL(SUM(monto),0) AS total FROM transacciones WHERE tipo='gasto'")
    ->fetch(PDO::FETCH_ASSOC)['total'];
$neto = $ing - $gas;

// Datos para edición
$editData = null;
if (isset($_GET['edit'])) {
    $eid  = (int) $_GET['edit'];
    $stmt = $conn->prepare("SELECT * FROM transacciones WHERE id_transaccion = ?");
    $stmt->execute([$eid]);
    $editData = $stmt->fetch(PDO::FETCH_ASSOC);
}

// Listado completo
$stmt = $conn->query("SELECT * FROM transacciones ORDER BY fecha DESC");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ganancias</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <style>
    body { margin:20px; font-family: 'Segoe UI', sans-serif; }
  </style>
</head>
<body>

  <h2 class="mb-4">Ganancias</h2>
  <div class="row mb-4">
    <div class="col-md-4">
      <div class="card text-white bg-success">
        <div class="card-body">
          <h5>Ingresos</h5>
          <p class="h2">$<?= number_format($ing,2,',','.') ?></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-danger">
        <div class="card-body">
          <h5>Gastos</h5>
          <p class="h2">$<?= number_format($gas,2,',','.') ?></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <h5>Neto</h5>
          <p class="h2">$<?= number_format($neto,2,',','.') ?></p>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-between align-items-center mb-2">
    <h4>Registros Financieros</h4>
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalTx">
      + Nueva Transacción
    </button>
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th><th>Fecha</th><th>Desc.</th><th>Tipo</th>
        <th>Cat.</th><th>Monto</th><th>Método</th><th>Ref.</th><th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach($rows as $r): ?>
      <tr>
        <td><?= $r['id_transaccion'] ?></td>
        <td><?= $r['fecha'] ?></td>
        <td><?= htmlspecialchars($r['descripcion']) ?></td>
        <td>
          <span class="badge bg-<?= $r['tipo']=='ingreso'?'success':'danger' ?>">
            <?= ucfirst($r['tipo']) ?>
          </span>
        </td>
        <td><?= htmlspecialchars($r['categoria']) ?></td>
        <td class="<?= $r['tipo']=='ingreso'?'text-success':'text-danger' ?>">
          <?= $r['tipo']=='ingreso'?'+':'' ?>$
          <?= number_format($r['monto'],2,',','.') ?>
        </td>
        <td><?= htmlspecialchars($r['metodo_pago']) ?></td>
        <td><?= htmlspecialchars($r['referencia']) ?></td>
        <td>
          <a href="?edit=<?= $r['id_transaccion'] ?>" class="btn btn-sm btn-primary">✎</a>
          <a href="?delete=<?= $r['id_transaccion'] ?>"
             class="btn btn-sm btn-danger"
             onclick="return confirm('¿Borrar esta transacción?')">🗑</a>
        </td>
      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>

  <!-- Modal Insert/Edit -->
  <div class="modal fade" id="modalTx" tabindex="-1">
    <div class="modal-dialog">
      <form class="modal-content" method="post" action="ganancias.php">
        <div class="modal-header">
          <h5 class="modal-title">
            <?= $editData ? 'Editar Transacción' : 'Nueva Transacción' ?>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" name="id_transaccion" value="<?= $editData['id_transaccion'] ?? '' ?>">
          <div class="mb-2">
            <label>Fecha:</label>
            <input type="date" name="fecha" class="form-control" required value="<?= $editData['fecha'] ?? '' ?>">
          </div>
          <div class="mb-2">
            <label>Tipo:</label>
            <select name="tipo" class="form-select" required>
              <option value="">Seleccionar...</option>
              <option value="ingreso" <?= ($editData['tipo'] ?? '')==='ingreso'?'selected':'' ?>>Ingreso</option>
              <option value="gasto"   <?= ($editData['tipo'] ?? '')==='gasto'  ?'selected':'' ?>>Gasto</option>
            </select>
          </div>
          <div class="mb-2">
            <label>Categoría:</label>
            <input type="text" name="categoria" class="form-control" required value="<?= $editData['categoria'] ?? '' ?>">
          </div>
          <div class="mb-2">
            <label>Descripción:</label>
            <textarea name="descripcion" class="form-control"><?= $editData['descripcion'] ?? '' ?></textarea>
          </div>
          <div class="mb-2">
            <label>Monto:</label>
            <input type="number" step="0.01" name="monto" class="form-control" required value="<?= $editData['monto'] ?? '' ?>">
          </div>
          <div class="mb-2">
            <label>Método de Pago:</label>
            <input type="text" name="metodo_pago" class="form-control" required value="<?= $editData['metodo_pago'] ?? '' ?>">
          </div>
          <div class="mb-2">
            <label>Referencia:</label>
            <input type="text" name="referencia" class="form-control" value="<?= $editData['referencia'] ?? '' ?>">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary">
            <?= $editData ? 'Guardar Cambios' : 'Guardar Transacción' ?>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <?php if (isset($_GET['status']) && $_GET['status']==='success'): ?>
  <script>
    document.addEventListener('DOMContentLoaded', function(){
      Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: 'Transacción guardada correctamente',
        timer: 2000,
        showConfirmButton: false
      });
    });
  </script>
  <?php endif; ?>

  <?php if ($editData): ?>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      new bootstrap.Modal(document.getElementById('modalTx')).show();
    });
  </script>
  <?php endif; ?>

</body>
</html>
