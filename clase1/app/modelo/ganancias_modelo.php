<?php
include_once 'conexion.php';

class GananciasModelo {
    private $conexion;

    public function __construct() {
        $conexionObj = new Conexion();
        $this->conexion = $conexionObj->conectar();
    }

    public function obtenerTransacciones() {
        $sql = "SELECT * FROM transacciones";
        $stmt = $this->conexion->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function agregarTransaccion($fecha, $tipo, $categoria, $descripcion, $monto, $metodo_pago, $referencia) {
        $sql = "INSERT INTO transacciones (fecha, tipo, categoria, descripcion, monto, metodo_pago, referencia) 
                VALUES (:fecha, :tipo, :categoria, :descripcion, :monto, :metodo_pago, :referencia)";
        $stmt = $this->conexion->prepare($sql);
        return $stmt->execute([
            ':fecha' => $fecha,
            ':tipo' => $tipo,
            ':categoria' => $categoria,
            ':descripcion' => $descripcion,
            ':monto' => $monto,
            ':metodo_pago' => $metodo_pago,
            ':referencia' => $referencia
        ]);
    }

    public function actualizarTransaccion($id, $fecha, $tipo, $categoria, $descripcion, $monto, $metodo_pago, $referencia) {
        $sql = "UPDATE transacciones SET 
                fecha = :fecha, 
                tipo = :tipo, 
                categoria = :categoria, 
                descripcion = :descripcion, 
                monto = :monto, 
                metodo_pago = :metodo_pago, 
                referencia = :referencia 
                WHERE id_transaccion = :id";
        $stmt = $this->conexion->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':fecha' => $fecha,
            ':tipo' => $tipo,
            ':categoria' => $categoria,
            ':descripcion' => $descripcion,
            ':monto' => $monto,
            ':metodo_pago' => $metodo_pago,
            ':referencia' => $referencia
        ]);
    }

    public function eliminarTransaccion($id) {
        $sql = "DELETE FROM transacciones WHERE id_transaccion = :id";
        $stmt = $this->conexion->prepare($sql);
        return $stmt->execute([':id' => $id]);
    }

    public function obtenerResumen() {
        $transacciones = $this->obtenerTransacciones();
        $ingresos = 0;
        $gastos = 0;
        
        foreach ($transacciones as $trans) {
            if ($trans['tipo'] == 'ingreso') {
                $ingresos += $trans['monto'];
            } else {
                $gastos += $trans['monto'];
            }
        }
        
        $balance = $ingresos - $gastos;
        $totalTransacciones = count($transacciones);
        
        return [
            'ingresos' => $ingresos,
            'gastos' => $gastos,
            'balance' => $balance,
            'total' => $totalTransacciones
        ];
    }
}
?>