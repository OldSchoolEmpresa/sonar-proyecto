<?php
include_once '../modelo/ganancias_modelo.php';

$modelo = new GananciasModelo();

$fecha = $_POST['fecha'];
$tipo = $_POST['tipo'];
$categoria = $_POST['categoria'];
$descripcion = $_POST['descripcion'];
$monto = $_POST['monto'];
$metodo_pago = $_POST['metodo_pago'];
$referencia = $_POST['referencia'];

$resultado = $modelo->agregarTransaccion($fecha, $tipo, $categoria, $descripcion, $monto, $metodo_pago, $referencia);

if ($resultado) {
    header("Location: /laravel/clase1/app/vista/ganancias.php?success=Transacción agregada exitosamente");
} else {
    header("Location: /laravel/clase1/app/vista/ganancias.php?error=Error al agregar transacción");
}
exit;
?>