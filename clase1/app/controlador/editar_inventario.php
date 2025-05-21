<?php
include_once '../modelo/modelo_inventario.php';

$id            = $_POST['id'];
$Nombre        = $_POST['Nombre'];
$Categoria     = $_POST['Categoria'];
$Precio        = $_POST['Precio'];
$Stock         = $_POST['Stock'];
$Vendidos      = $_POST['Vendidos'];
$fecha_llegada = $_POST['fecha_llegada'];
$fecha_salida  = $_POST['fecha_salida'];
$Estado        = $_POST['Estado'];

$modelo = new ModeloInventario();
$resultado = $modelo->actualizarProducto($id, $Nombre, $Categoria, $Precio, $Stock, $Vendidos, $fecha_llegada, $fecha_salida, $Estado);

if ($resultado) {
    echo "ok";
} else {
    echo "error";
}
