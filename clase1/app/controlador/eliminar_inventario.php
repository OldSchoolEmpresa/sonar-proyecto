<?php
include_once '../modelo/modelo_inventario.php';

$id = $_POST['id'];

$modelo = new ModeloInventario();
$resultado = $modelo->eliminarProducto($id);

if ($resultado) {
    echo "ok";
} else {
    echo "error";
}
