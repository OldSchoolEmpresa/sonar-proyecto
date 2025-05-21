<?php
header('Content-Type: application/json');
require_once '../modelo/conexion.php';

$response = ['success' => false, 'message' => ''];

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['id_transaccion'])) {
        throw new Exception('ID de transacción no proporcionado');
    }
    
    // Verificar si la transacción existe
    $checkStmt = $pdo->prepare("SELECT id_transaccion FROM transacciones WHERE id_transaccion = :id");
    $checkStmt->execute([':id' => $data['id_transaccion']]);
    
    if ($checkStmt->rowCount() === 0) {
        throw new Exception('Transacción no encontrada');
    }
    
    // Eliminar la transacción
    $stmt = $pdo->prepare("DELETE FROM transacciones WHERE id_transaccion = :id");
    $success = $stmt->execute([':id' => $data['id_transaccion']]);
    
    if ($success) {
        $response['success'] = true;
        $response['message'] = 'Transacción eliminada correctamente';
    } else {
        throw new Exception('Error al eliminar la transacción');
    }
    
} catch (PDOException $e) {
    $response['message'] = 'Error de base de datos: ' . $e->getMessage();
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
?>