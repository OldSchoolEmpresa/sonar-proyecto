<?php
class ModeloInventario {
    private $conexion;
    private $db;

    public function __construct() {
        include_once 'conexion.php';  // Ajusta la ruta si es necesario
        $this->conexion = new Conexion();
        $this->db = $this->conexion->conectar();
    }

    // Listar todos los productos
    public function obtenerProductos() {
        $sql = "SELECT * FROM inventario";
        $query = $this->db->query($sql);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    // Agregar un producto
    public function agregarProducto($Nombre, $Categoria, $Precio, $Stock, $Vendidos, $fecha_llegada, $fecha_salida, $Estado) {
        $sql = "INSERT INTO inventario 
                (Nombre, Categoria, Precio, Stock, Vendidos, fecha_llegada, fecha_salida, Estado)
                VALUES 
                (:Nombre, :Categoria, :Precio, :Stock, :Vendidos, :fecha_llegada, :fecha_salida, :Estado)";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':Nombre'        => $Nombre,
            ':Categoria'     => $Categoria,
            ':Precio'        => $Precio,
            ':Stock'         => $Stock,
            ':Vendidos'      => $Vendidos,
            ':fecha_llegada' => $fecha_llegada,
            ':fecha_salida'  => $fecha_salida,
            ':Estado'        => $Estado
        ]);
    }

    // Actualizar un producto
    public function actualizarProducto($id, $Nombre, $Categoria, $Precio, $Stock, $Vendidos, $fecha_llegada, $fecha_salida, $Estado) {
        $sql = "UPDATE inventario 
                SET Nombre = :Nombre,
                    Categoria = :Categoria,
                    Precio = :Precio,
                    Stock = :Stock,
                    Vendidos = :Vendidos,
                    fecha_llegada = :fecha_llegada,
                    fecha_salida  = :fecha_salida,
                    Estado = :Estado
                WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            ':id'            => $id,
            ':Nombre'        => $Nombre,
            ':Categoria'     => $Categoria,
            ':Precio'        => $Precio,
            ':Stock'         => $Stock,
            ':Vendidos'      => $Vendidos,
            ':fecha_llegada' => $fecha_llegada,
            ':fecha_salida'  => $fecha_salida,
            ':Estado'        => $Estado
        ]);
    }

    
    public function eliminarProducto($id)
    {
        $db = $this->conexion();
        $query = $db->prepare("DELETE FROM inventario WHERE id = :id");
        $query->bindParam(':id', $id, PDO::PARAM_INT);
        return $query->execute();
    }
}
