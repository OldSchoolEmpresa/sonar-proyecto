<?php
// vista/dashboard.php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.php?error=Debes iniciar sesión');
    exit;
}
$user = $_SESSION['usuario'];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Dashboard</title>
</head>
<body>
  <h1>Bienvenido, <?= htmlspecialchars($user['name']) ?></h1>
  <p>Tu correo: <?= htmlspecialchars($user['email']) ?></p>
  <a href="../controlador/LogoutController.php">Cerrar sesión</a>
  <!-- Aquí tu contenido principal -->
</body>
</html>
