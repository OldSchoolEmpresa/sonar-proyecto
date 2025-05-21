<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$datos = json_decode(file_get_contents("php://input"));

$correo = $datos->correoEmpleado;
$password = $datos->passwordEmpleado;

// Aquí va tu lógica para validar con la base de datos
// Simulación:
if ($correo === "admin@gmail.com" && $password === "123456") {
    echo json_encode([
        "status" => "success",
        "token" => bin2hex(random_bytes(16)), // token fake
        "user" => [
            "nombre" => "Administrador",
            "correo" => $correo
        ]
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Credenciales incorrectas"
    ]);
}
