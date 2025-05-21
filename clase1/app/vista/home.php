<?php
require_once '../config/database.php';
require_once '../models/User.php';

session_start();

// Verificar token
if(!isset($_COOKIE['auth_token'])) {
    header('Location: /views/auth/login.php');
    exit;
}

$userModel = new User();
$user = $userModel->getUserByToken($_COOKIE['auth_token']);

if(!$user || strtotime($user['token_expires']) < time()) {
    setcookie('auth_token', '', time() - 3600, '/');
    header('Location: /views/auth/login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Principal</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
    <div class="container">
        <h1>Bienvenido, <?= htmlspecialchars($user['email']) ?></h1>
        <a href="/controllers/AuthController.php?action=logout" class="custom-button">Cerrar Sesión</a>
    </div>
</body>
</html>