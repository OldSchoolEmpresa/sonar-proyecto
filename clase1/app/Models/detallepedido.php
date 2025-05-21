<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "usuario", "contraseña", "nombre_basedatos");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Preparar los datos del pedido (ejemplo)
$pedido = [
    'nombre_cliente' => 'Juan Pérez',
    'direccion_cliente' => 'Calle 123 #45-67',
    'telefono_cliente' => '3001234567',
    'email_cliente' => 'juan@example.com',
    'fecha_pedido' => date('Y-m-d H:i:s'),
    'metodo_pago' => 'Tarjeta',
    'plazo_entrega' => '3 días',
    'observaciones' => 'Entregar después de las 5pm',
    'estado_pedido' => 'Pendiente',
    'total_pedido' => 150000,
    'productos' => json_encode([
        [
            'nombre' => 'Producto 1',
            'cantidad' => 2,
            'precio_unitario' => 50000,
            'subtotal' => 100000
        ],
        [
            'nombre' => 'Producto 2',
            'cantidad' => 1,
            'precio_unitario' => 50000,
            'subtotal' => 50000
        ]
    ])
];

// Preparar la consulta SQL
$sql = "INSERT INTO pedidos_completos (
    nombre_cliente, direccion_cliente, telefono_cliente, email_cliente,
    fecha_pedido, metodo_pago, plazo_entrega, observaciones,
    estado_pedido, total_pedido, productos
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);
$stmt->bind_param(
    "sssssssssds",
    $pedido['nombre_cliente'],
    $pedido['direccion_cliente'],
    $pedido['telefono_cliente'],
    $pedido['email_cliente'],
    $pedido['fecha_pedido'],
    $pedido['metodo_pago'],
    $pedido['plazo_entrega'],
    $pedido['observaciones'],
    $pedido['estado_pedido'],
    $pedido['total_pedido'],
    $pedido['productos']
);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Pedido registrado correctamente. ID: " . $stmt->insert_id;
} else {
    echo "Error al registrar el pedido: " . $stmt->error;
}

// Cerrar conexión
$stmt->close();
$conexion->close();
?>