<?php
include_once 'conexion.php'; // Asegúrate de que la ruta sea correcta
$conexion = new Conexion();
$db = $conexion->conectar();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $contrasena = isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : null;
    $codigoAdmin = isset($_POST['codigoAdmin']) ? $_POST['codigoAdmin'] : null;

    if ($nombre && $email && $contrasena) {
        try {
            if ($codigoAdmin === 'ADMIN123') { // Código de administrador
                $sql = "INSERT INTO administradores (nombre, email, contrasena) VALUES (:nombre, :email, :contrasena)";
            } else {
                $sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES (:nombre, :email, :contrasena)";
            }

            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':nombre' => $nombre,
                ':email' => $email,
                ':contrasena' => $contrasena
            ]);

            echo json_encode(['mensaje' => 'Registro exitoso']);
        } catch (PDOException $e) {
            echo json_encode(['error' => 'Error al registrar: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['error' => 'Faltan datos obligatorios']);
    }
}
?>
