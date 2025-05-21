<?php
// controlador/LoginController.php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require_once __DIR__ . '/../modelo/conexion.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Si no es POST, lo mandamos al login
    header('Location: ../vista/login.php');
    exit;
}

$email    = trim($_POST['emailCliente']    ?? '');
$password =         $_POST['contrasenaCliente'] ?? '';

if ($email === '' || $password === '') {
    header('Location: ../vista/login.php?error=Completa todos los campos');
    exit;
}

$db   = (new Conexion())->conectar();
$sql  = "SELECT id, email, contrasena, nombre
         FROM usuarios
         WHERE email = :email
         LIMIT 1";
$stmt = $db->prepare($sql);
$stmt->execute(['email' => $email]);

$usuario = $stmt->fetch();
if ($usuario && password_verify($password, $usuario['contrasena'])) {
    // Credenciales válidas
    $_SESSION['usuario'] = [
        'id'    => $usuario['id'],
        'email' => $usuario['email'],
        'name'  => $usuario['nombre'],
    ];
    header('Location: ../vista/dashboard.php');
    exit;
}

// Si llegamos aquí, falló el login
header('Location: ../vista/login.php?error=Email o contraseña incorrectos');
exit;
