<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "empleado";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error de conexión: " . $e->getMessage()
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

// Validar datos requeridos
if(empty($data->idEmpleado) || empty($data->nombreEmpleado) || 
   empty($data->correoEmpleado) || empty($data->passwordEmpleado)) {
    echo json_encode([
        "success" => false,
        "message" => "Todos los campos son obligatorios."
    ]);
    exit;
}

// Verificar si el correo ya existe
$checkEmail = $conn->prepare("SELECT idEmpleado FROM empleadocliente WHERE correoEmpleado = ?");
$checkEmail->execute([$data->correoEmpleado]);

if($checkEmail->rowCount() > 0) {
    echo json_encode([
        "success" => false,
        "message" => "El correo electrónico ya está registrado."
    ]);
    exit;
}

// Insertar nuevo registro
try {
    $sql = "INSERT INTO empleadocliente 
            (idEmpleado, nombreEmpleado, correoEmpleado, passwordEmpleado, rol) 
            VALUES (?, ?, ?, ?, 'cliente')";
    
    $stmt = $conn->prepare($sql);
    $hashedPassword = password_hash($data->passwordEmpleado, PASSWORD_BCRYPT);
    
    $success = $stmt->execute([
        $data->idEmpleado,
        $data->nombreEmpleado,
        $data->correoEmpleado,
        $hashedPassword
    ]);

    if($success) {
        echo json_encode([
            "success" => true,
            "message" => "Usuario registrado correctamente.",
            "data" => [
                "idEmpleado" => $data->idEmpleado,
                "nombreEmpleado" => $data->nombreEmpleado,
                "correoEmpleado" => $data->correoEmpleado
            ]
        ]);
    }
} catch(PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error al registrar: " . $e->getMessage()
    ]);
}
?>