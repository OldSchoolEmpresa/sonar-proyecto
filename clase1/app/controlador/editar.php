<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include_once 'modelo/conexion.php';
    $conexion = new Conexion();
    $db = $conexion->conectar();

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
    $ciudad = $_POST['ciudad'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];

    $query = $db->prepare("UPDATE usuarios SET 
        nombre = :nombre, 
        email = :email, 
        contrasena = :contrasena, 
        ciudad = :ciudad, 
        direccion = :direccion, 
        telefono = :telefono 
        WHERE id = :id
    ");

    $query->bindParam(':id', $id, PDO::PARAM_INT);
    $query->bindParam(':nombre', $nombre);
    $query->bindParam(':email', $email);
    $query->bindParam(':contrasena', $contrasena);
    $query->bindParam(':ciudad', $ciudad);
    $query->bindParam(':direccion', $direccion);
    $query->bindParam(':telefono', $telefono);

    if ($query->execute()) {
        echo "Usuario actualizado correctamente";
    } else {
        echo "Error al actualizar el usuario";
    }
} else {
    echo "Método no permitido";
}
?>
