<?php
// Habilitar reporte de errores (útil para depurar; en producción puedes quitarlo)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Encabezados para permitir solicitudes desde tu front-end (CORS)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Incluir tu clase de conexión PDO
require_once __DIR__ . '/../modelo/conexion.php';

// Crear instancia de la conexión
$conexionObj = new Conexion();
$db = $conexionObj->conectar();

// Manejo de la petición OPTIONS (preflight de CORS)
$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'OPTIONS') {
    exit; // No hacer nada más
}

try {
    switch ($method) {
        case 'GET':
            // Listar todos los productos
            $sql = "SELECT * FROM inventario"; 
            // Asegúrate de que tu tabla en la BD se llame 'inventario' y tenga
            // las columnas: id, Nombre, Categoria, Precio, Stock, Vendidos, fecha_llegada, fecha_salida, Estado
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
            break;

        case 'POST':
            // Insertar un nuevo producto
            $data = json_decode(file_get_contents("php://input"), true);

            $sql = "INSERT INTO inventario 
                    (Nombre, Categoria, Precio, Stock, Vendidos, fecha_llegada, fecha_salida, Estado)
                    VALUES 
                    (:Nombre, :Categoria, :Precio, :Stock, :Vendidos, :fecha_llegada, :fecha_salida, :Estado)";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':Nombre',        $data['Nombre']);
            $stmt->bindParam(':Categoria',     $data['Categoria']);
            $stmt->bindParam(':Precio',        $data['Precio']);
            $stmt->bindParam(':Stock',         $data['Stock']);
            $stmt->bindParam(':Vendidos',      $data['Vendidos']);
            $stmt->bindParam(':fecha_llegada', $data['fecha_llegada']);
            $stmt->bindParam(':fecha_salida',  $data['fecha_salida']);
            $stmt->bindParam(':Estado',        $data['Estado']);
            $stmt->execute();

            echo json_encode(["mensaje" => "Producto agregado con éxito"]);
            break;

        case 'PUT':
            // Actualizar un producto existente
            $data = json_decode(file_get_contents("php://input"), true);

            $sql = "UPDATE inventario 
                    SET 
                        Nombre = :Nombre,
                        Categoria = :Categoria,
                        Precio = :Precio,
                        Stock = :Stock,
                        Vendidos = :Vendidos,
                        fecha_llegada = :fecha_llegada,
                        fecha_salida  = :fecha_salida,
                        Estado = :Estado
                    WHERE id = :id";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id',            $data['id']);
            $stmt->bindParam(':Nombre',        $data['Nombre']);
            $stmt->bindParam(':Categoria',     $data['Categoria']);
            $stmt->bindParam(':Precio',        $data['Precio']);
            $stmt->bindParam(':Stock',         $data['Stock']);
            $stmt->bindParam(':Vendidos',      $data['Vendidos']);
            $stmt->bindParam(':fecha_llegada', $data['fecha_llegada']);
            $stmt->bindParam(':fecha_salida',  $data['fecha_salida']);
            $stmt->bindParam(':Estado',        $data['Estado']);
            $stmt->execute();

            echo json_encode(["mensaje" => "Producto actualizado con éxito"]);
            break;

        case 'DELETE':
            // Eliminar un producto
            $data = json_decode(file_get_contents("php://input"), true);

            $sql = "DELETE FROM inventario WHERE id = :id";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $data['id']);
            $stmt->execute();

            echo json_encode(["mensaje" => "Producto eliminado con éxito"]);
            break;

        default:
            http_response_code(405); // Método no permitido
            echo json_encode(["error" => "Método no permitido"]);
            break;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error en el servidor: " . $e->getMessage()]);
}
