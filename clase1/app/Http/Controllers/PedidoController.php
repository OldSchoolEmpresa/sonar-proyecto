<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido; // Asegúrate de tener el modelo Pedido configurado

class PedidoController extends Controller
{
    public function store(Request $request)
    {
        // Validación básica de los datos que provienen del pedido.
        $data = $request->validate([
            'producto.id'            => 'required|integer',
            'producto.nombre'        => 'required|string',
            'producto.precio'        => 'required|numeric',
            'producto.descripcion'   => 'required|string',
            'producto.tiempoEntrega' => 'required|string',
            'producto.colores'       => 'required|array',
            'cantidad'               => 'required|integer',
            'talla'                  => 'required|string',
            'colorSeleccionado'      => 'required|array',
            'imagenActual'           => 'required|string',
            'indiceImagen'           => 'required|integer',
            'fechaEstimada'          => 'required|string',
            'usuario'                => 'required|array',
        ]);

        // Aquí puedes realizar cualquier procesamiento adicional o almacenar el pedido.
        // Se asume que el modelo Pedido tiene definidos los atributos "fillable" correspondientes.
        $pedido = Pedido::create($data);

        return response()->json([
            'mensaje' => 'Pedido almacenado correctamente',
            'pedido'  => $pedido
        ], 201);
    }
}