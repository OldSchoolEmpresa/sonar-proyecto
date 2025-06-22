<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include_once 'modelo/conexion.php';
    $conexion = new Conexion();
    $db = $conexion->conectar();

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
    $ciudad = $_POST['ciudad'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];

    $query = $db->prepare("INSERT INTO usuarios (nombre, email, contrasena, ciudad, direccion, telefono) VALUES (:nombre, :email, :contrasena, :ciudad, :direccion, :telefono)");
    $query->bindParam(':nombre', $nombre);
    $query->bindParam(':email', $email);
    $query->bindParam(':contrasena', $contrasena);
    $query->bindParam(':ciudad', $ciudad);
    $query->bindParam(':direccion', $direccion);
    $query->bindParam(':telefono', $telefono);

    if ($query->execute()) {
        echo "Usuario registrado correctamente";
    } else {
        echo "Error al registrar el usuario";
    }
} else {
    echo "Método no permitido";
}
?>
