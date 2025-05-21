<?php
header('Content-Type: application/json');
require_once '../modelo/conexion.php'; // Archivo con la conexión a la base de datos

$response = ['success' => false, 'message' => ''];

try {
    // Validar los datos recibidos
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['fecha']) || !isset($data['tipo']) || !isset($data['categoria']) || 
        !isset($data['descripcion']) || !isset($data['monto']) || !isset($data['metodo_pago'])) {
        throw new Exception('Datos incompletos');
    }
    
    // Preparar la consulta SQL
    $stmt = $pdo->prepare("INSERT INTO transacciones (fecha, tipo, categoria, descripcion, monto, metodo_pago, referencia) 
                          VALUES (:fecha, :tipo, :categoria, :descripcion, :monto, :metodo_pago, :referencia)");
    
    // Ejecutar la consulta con los parámetros
    $success = $stmt->execute([
        ':fecha' => $data['fecha'],
        ':tipo' => $data['tipo'],
        ':categoria' => $data['categoria'],
        ':descripcion' => $data['descripcion'],
        ':monto' => $data['monto'],
        ':metodo_pago' => $data['metodo_pago'],
        ':referencia' => $data['referencia'] ?? null
    ]);
    
    if ($success) {
        $response['success'] = true;
        $response['message'] = 'Transacción registrada correctamente';
        $response['id'] = $pdo->lastInsertId();
    } else {
        throw new Exception('Error al guardar la transacción');
    }
    
} catch (PDOException $e) {
    $response['message'] = 'Error de base de datos: ' . $e->getMessage();
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
?>