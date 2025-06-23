<?php
require_once 'conexion.php';
use App\Http\Controllers\HomeController;


$data = json_decode(file_get_contents("php://input"));

if (isset($data->nombreEmpleado) && isset($data->correoEmpleado) && isset($data->passwordEmpleado) && isset($data->rol)) {
    $nombre = $data->nombreEmpleado;
    $correo = $data->correoEmpleado;
    $password = password_hash($data->passwordEmpleado, PASSWORD_BCRYPT); // Cifrar contraseña
    $rol = $data->rol;

    // Si el usuario es administrador, verificar si envió un código
    $codigoAdmin = isset($data->codigoAdministrador) ? $data->codigoAdministrador : null;

    if ($rol === "admin" && empty($codigoAdmin)) {
        echo json_encode(["error" => "Debe ingresar un código de administrador"]);
        exit();
    }

    $sql = "INSERT INTO empleadocliente (nombreEmpleado, correoEmpleado, passwordEmpleado, rol, codigoAdministrador) 
            VALUES ('$nombre', '$correo', '$password', '$rol', '$codigoAdmin')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["mensaje" => "Registro exitoso"]);
    } else {
        echo json_encode(["error" => "Error en el registro: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Faltan datos"]);
}
