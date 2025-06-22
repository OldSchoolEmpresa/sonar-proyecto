<?php
include_once __DIR__ . '/../modelo/ganancias_modelo.php';
$modelo = new GananciasModelo();
$transacciones = $modelo->obtenerTransacciones();
$resumen = $modelo->obtenerResumen();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Sistema de Gestión de Ganancias</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
    body {
        background: #F5F6FA;
        color: #333;
        font-family: 'Helvetica Neue', sans-serif;
    }
    .container-fluid {
        padding: 30px;
    }
    .header h1 {
        color: #6C5CE7;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: bold;
        text-shadow: 1px 1px 4px #D1D9E6;
    }
    .header p {
        color: #6C5CE7;
        font-size: 1.1rem;
    }
    .summary-card {
        background: #FFFFFF;
        color: #6C5CE7;
        text-align: center;
        padding: 20px;
        border-radius: 30px;
        margin-bottom: 20px;
        box-shadow: 0 4px 20px -5px #6C5CE7;
        transition: all 0.3s ease;
    }
    .summary-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 30px -5px #6C5CE7;
    }
    .transaction-form {
        background: #FFFFFF;
        color: #6C5CE7;
        padding: 20px;
        border-radius: 30px;
        margin-bottom: 20px;
        box-shadow: 0 4px 20px -5px #6C5CE7;
    }
    .transaction-form h3 {
        color: #6C5CE7;
        margin-bottom: 20px;
    }
    .transaction-form .form-label {
        color: #6C5CE7;
    }
    .transaction-form .form-control, .transaction-form .form-select {
        background: #F5F6FA;
        color: #6C5CE7;
        border: 1px solid #6C5CE7;
        margin-bottom: 15px;
        border-radius: 20px;
    }
    .transaction-form .form-control::placeholder {
        color: #6C5CE7;
    }
    .transaction-form .btn {
        background: #6C5CE7;
        color: #FFFFFF;
        font-weight: bold;
        border: none;
        box-shadow: 0 4px 20px -5px #6C5CE7;
        border-radius: 20px;
    }
    .transaction-form .btn:hover {
        background: #5A47D2;
    }
    .table {
        color: #333;
    }
    .table thead {
        background: #6C5CE7;
        color: #FFFFFF;
    }
    .table tbody tr:hover {
        background: #E5E5FF;
    }
    .ingreso-badge {
        color: #28a745;
        font-weight: bold;
    }
    .gasto-badge {
        color: #dc3545;
        font-weight: bold;
    }
    .action-btn {
        margin-right: 5px;
        background: #6C5CE7;
        color: #FFFFFF;
        border: none;
        border-radius: 20px;
    }
    .action-btn:hover {
        background: #5A47D2;
    }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="header">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h1 class="underline-animation"><i class="fas fa-money-bill-wave me-3"></i>Gestor de Ganancias</h1>
                    <p class="mb-0">Administra tus ingresos y gastos de manera eficiente</p>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721287.png" alt="Finanzas" style="height: 80px; filter: none">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3">
                <div class="card summary-card">
                    <i class="fas fa-wallet fa-2x mb-2"></i>
                    <h5>Ingresos Totales</h5>
                    <h3>$<?php echo number_format($resumen['ingresos'], 2); ?></h3>
                    <p class="text-success"><i class="fas fa-arrow-up"></i> 12% este mes</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card summary-card">
                    <i class="fas fa-shopping-cart fa-2x mb-2"></i>
                    <h5>Gastos Totales</h5>
                    <h3>$<?php echo number_format($resumen['gastos'], 2); ?></h3>
                    <p class="text-danger"><i class="fas fa-arrow-down"></i> 5% este mes</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card summary-card">
                    <i class="fas fa-chart-line fa-2x mb-2"></i>
                    <h5>Balance</h5>
                    <h3>$<?php echo number_format($resumen['balance'], 2); ?></h3>
                    <p class="text-success"><i class="fas fa-arrow-up"></i> 15% este mes</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card summary-card">
                    <i class="fas fa-exchange-alt fa-2x mb-2"></i>
                    <h5>Transacciones</h5>
                    <h3><?php echo $resumen['total']; ?></h3>
                    <p>Activas este mes</p>
                </div>
            </div>
        </div>

        <div class="transaction-form">
            <h3><i class="fas fa-plus-circle me-2"></i>Agregar Nueva Transacción</h3>
            <hr>
            <form method="POST" action="/laravel/clase1/app/controlador/ganancias_agregar.php">
                <div class="row">
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Fecha</label>
                            <input type="date" class="form-control" name="fecha" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Tipo</label>
                            <select class="form-select" name="tipo" required>
                                <option value="ingreso">Ingreso</option>
                                <option value="gasto">Gasto</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Categoría</label>
                            <select class="form-select" name="categoria" required>
                                <option value="zapatos">Zapatos</option>
                                <option value="ropa">Ropa</option>
                                <option value="comida">Comida</option>
                                <option value="servicios">Servicios</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Monto</label>
                            <input type="number" class="form-control" name="monto" placeholder="0.00" step="0.01" required>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Descripción</label>
                            <input type="text" class="form-control" name="descripcion" placeholder="Descripción de la transacción" required>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Método de Pago</label>
                            <select class="form-select" name="metodo_pago" required>
                                <option value="efectivo">Efectivo</option>
                                <option value="tarjeta">Tarjeta</option>
                                <option value="transferencia">Transferencia</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="mb-3">
                            <label class="form-label">Referencia</label>
                            <input type="text" class="form-control" name="referencia" placeholder="Número de referencia">
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary btn-lg"><i class="fas fa-save me-2"></i>Guardar Transacción</button>
                </div>
            </form>
        </div>

        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0"><i class="fas fa-list me-2"></i>Registros de Transacciones</h5>
                <div>
                    <input type="text" class="form-control" placeholder="Buscar transacción..." id="buscarTransaccion">
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover" id="tablaTransacciones">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Tipo</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                                <th>Monto</th>
                                <th>Método</th>
                                <th>Referencia</th>
                                <th>Creado en</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($transacciones as $trans): ?>
                                <tr>
                                   <td><?php echo $trans['id_transaccion']; ?></td>
                                   <td><?php echo $trans['fecha']; ?></td>
                                   <td>
                                      <span class="<?php echo $trans['tipo'] == 'ingreso' ? 'ingreso-badge' : 'gasto-badge'; ?>"> 
                                         <?php echo ucfirst($trans['tipo']); ?>
                                      </span>
                                   </td>
                                   <td><?php echo ucfirst($trans['categoria']); ?></td>
                                   <td><?php echo $trans['descripcion']; ?></td>
                                   <td>$<?php echo number_format($trans['monto'], 2); ?></td>
                                   <td><?php echo ucfirst($trans['metodo_pago']); ?></td>
                                   <td><?php echo $trans['referencia']; ?></td>
                                   <td><?php echo $trans['creado_en']; ?></td>
                                   <td>
                                      <button class="btn btn-sm action-btn" data-bs-toggle="modal" data-bs-target="#editModal<?php echo $trans['id_transaccion']; ?>"> <i class="fas fa-edit"></i> </button>
                                      <a href="/laravel/clase1/app/controlador/ganancias_eliminar.php?id=<?php echo $trans['id_transaccion']; ?>" class="btn btn-sm action-btn" onclick="return confirm('¿Estás seguro de que deseas eliminar esta transacción?');">
                                         <i class="fas fa-trash"></i>
                                      </a>
                                   </td>
                                </tr>

                                <!-- Modal Editar -->
                                <div class="modal fade" id="editModal<?php echo $trans['id_transaccion']; ?>" tabindex="-1">
                                   <div class="modal-dialog modal-lg">
                                      <div class="modal-content">
                                         <div class="modal-header">
                                             <h5 class="modal-title"><i class="fas fa-edit me-2"></i>Editar Transacción #<?php echo $trans['id_transaccion']; ?></h5>
                                             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                         </div>
                                         <form method="POST" action="/laravel/clase1/app/controlador/ganancias_editar.php">
                                             <div class="modal-body">
                                                 <input type="hidden" name="id_transaccion" value="<?php echo $trans['id_transaccion']; ?>">                                                  
                                                 <div class="row">
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Fecha</label>
                                                            <input type="date" class="form-control" name="fecha" value="<?php echo $trans['fecha']; ?>" required>
                                                        </div>
                                                     </div>
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Tipo</label>
                                                            <select class="form-select" name="tipo" required>
                                                                <option value="ingreso" <?php echo $trans['tipo'] == 'ingreso' ? 'selected' : ''; ?>>Ingreso</option>
                                                                <option value="gasto" <?php echo $trans['tipo'] == 'gasto' ? 'selected' : ''; ?>>Gasto</option>
                                                            </select>
                                                        </div>
                                                     </div>
                                                 </div>

                                                 <div class="row">
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Categoría</label>
                                                            <select class="form-select" name="categoria" required>
                                                                <option value="zapatos" <?php echo $trans['categoria'] == 'zapatos' ? 'selected' : ''; ?>>Zapatos</option>
                                                                <option value="ropa" <?php echo $trans['categoria'] == 'ropa' ? 'selected' : ''; ?>>Buzos</option>
                                                                <option value="ropa" <?php echo $trans['categoria'] == 'ropa' ? 'selected' : ''; ?>>Gorras</option>  
                                                                <option value="ropa" <?php echo $trans['categoria'] == 'ropa' ? 'selected' : ''; ?>>Camisas</option>
                                           
                                                            </select>
                                                        </div>
                                                     </div>
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Monto</label>
                                                            <input type="number" class="form-control" name="monto" value="<?php echo $trans['monto']; ?>" step="0.01" required>
                                                        </div>
                                                     </div>
                                                 </div>

                                                 <div class="mb-3">
                                                     <label class="form-label">Descripción</label>
                                                     <input type="text" class="form-control" name="descripcion" value="<?php echo $trans['descripcion']; ?>" required>
                                                 </div>

                                                 <div class="row">
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Método de Pago</label>
                                                            <select class="form-select" name="metodo_pago" required>
                                                                <option value="efectivo" <?php echo $trans['metodo_pago'] == 'efectivo' ? 'selected' : ''; ?>>Efectivo</option>
                                                                <option value="tarjeta" <?php echo $trans['metodo_pago'] == 'tarjeta' ? 'selected' : ''; ?>>Tarjeta</option>
                                                                <option value="transferencia" <?php echo $trans['metodo_pago'] == 'transferencia' ? 'selected' : ''; ?>>Transferencia</option>
                                                            </select>
                                                        </div>
                                                     </div>
                                                     <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Referencia</label>
                                                            <input type="text" class="form-control" name="referencia" value="<?php echo $trans['referencia']; ?>"> 
                                                        </div>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="modal-footer">
                                                 <button type="submit" class="btn"><i class="fas fa-edit me-2"></i>Actualizar</button>
                                             </div>
                                         </form>
                                      </div>
                                   </div>
                                </div>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div><!-- Container -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/js/bootstrap.bundle.min.js"></script>

    <script>
    <?php if (isset($_GET['success'])): ?>
    Swal.fire({ 
        icon:'success',
        title:'Muy bien!', 
        text:'<?php echo $_GET['success']; ?>',
        confirmButtonColor: "#6C5CE7" 
    });
    <?php endif; ?>
    <?php if (isset($_GET['error'])): ?>
    Swal.fire({ 
        icon:'error',
        title:'Oops!', 
        text:'<?php echo $_GET['error']; ?>',
        confirmButtonColor: "#6C5CE7" 
    });
    <?php endif; ?>
    </script>
</body>
</html>
