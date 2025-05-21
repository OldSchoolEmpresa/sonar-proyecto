<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents('php://input'), true);

// Validar datos recibidos
if (!isset($data['producto']) || !isset($data['usuario']) || !isset($data['total'])) {
    http_response_code(400);
    echo json_encode(['mensaje' => 'Datos incompletos']);
    exit;
}

// Simular conexión a base de datos y guardado del pedido
try {
    // Aquí iría tu lógica para guardar en la base de datos
    // Por ahora simulamos que se guardó correctamente
    
    // Puedes agregar aquí el envío de correo electrónico de confirmación
    
    http_response_code(200);
    echo json_encode([
        'mensaje' => 'Pedido registrado con éxito',
        'numero_pedido' => rand(1000, 9999) // Número de pedido simulado
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['mensaje' => 'Error al procesar el pedido: ' . $e->getMessage()]);
}
?>