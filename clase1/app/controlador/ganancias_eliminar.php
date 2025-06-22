<?php
include_once '../modelo/ganancias_modelo.php';

$modelo = new GananciasModelo();

$id = $_GET['id'];

$resultado = $modelo->eliminarTransaccion($id);

if ($resultado) {
    header("Location: /laravel/clase1/app/vista/ganancias.php?success=Transacción eliminada exitosamente");
} else {
    header("Location: /laravel/clase1/app/vista/ganancias.php?error=Error al eliminar transacción");
}
exit;
?>