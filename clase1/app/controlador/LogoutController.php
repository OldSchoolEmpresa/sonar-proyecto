<?php
// controlador/LogoutController.php
session_start();
unset($_SESSION['usuario']);
header('Location: ../vista/login.php?message=Sesión cerrada con éxito');
exit;
