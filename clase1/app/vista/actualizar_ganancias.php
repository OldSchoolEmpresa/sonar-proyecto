<?php
header('Content-Type: application/json');
require_once '../modelo/conexion.php';

$response = ['success' => false, 'message' => ''];

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['id_transaccion']) || !isset($data['fecha']) || !isset($data['tipo']) || 
        !isset($data['categoria']) || !isset($data['descripcion']) || !isset($data['monto']) || 
        !isset($data['metodo_pago'])) {
        throw new Exception('Datos incompletos');
    }
    
    // Verificar si la transacción existe
    $checkStmt = $pdo->prepare("SELECT id_transaccion FROM transacciones WHERE id_transaccion = :id");
    $checkStmt->execute([':id' => $data['id_transaccion']]);
    
    if ($checkStmt->rowCount() === 0) {
        throw new Exception('Transacción no encontrada');
    }
    
    // Actualizar la transacción
    $stmt = $pdo->prepare("UPDATE transacciones SET 
                          fecha = :fecha,
                          tipo = :tipo,
                          categoria = :categoria,
                          descripcion = :descripcion,
                          monto = :monto,
                          metodo_pago = :metodo_pago,
                          referencia = :referencia
                          WHERE id_transaccion = :id");
    
    $success = $stmt->execute([
        ':id' => $data['id_transaccion'],
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
        $response['message'] = 'Transacción actualizada correctamente';
    } else {
        throw new Exception('Error al actualizar la transacción');
    }
    
} catch (PDOException $e) {
    $response['message'] = 'Error de base de datos: ' . $e->getMessage();
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
?>