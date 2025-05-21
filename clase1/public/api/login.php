<?php
header('Content-Type: application/json');
require __DIR__.'/../modelo/conexion.php';
session_start();

$data = json_decode(file_get_contents('php://input'), true);
$email    = $data['correo']   ?? '';
$password = $data['password'] ?? '';

if (!$email || !$password) {
  http_response_code(400);
  echo json_encode(['error'=>'Faltan datos']);
  exit;
}

$db   = (new Conexion())->conectar();
$stmt = $db->prepare("SELECT id,nombre,contrasena FROM usuarios WHERE email=:e");
$stmt->execute(['e'=>$email]);
$u = $stmt->fetch();

if ($u && password_verify($password, $u['contrasena'])) {
  $_SESSION['usuario'] = ['id'=>$u['id'],'name'=>$u['nombre'],'email'=>$email];
  echo json_encode(['status'=>200,'message'=>'OK']);
} else {
  http_response_code(401);
  echo json_encode(['error'=>'Credenciales inválidas']);
}
