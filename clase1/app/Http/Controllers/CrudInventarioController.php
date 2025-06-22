<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CrudInventarioController extends Controller
{
    public function eliminar(Request $request)
{
    $id = $request->input('id');

    include_once base_path('app/modelo/modelo_inventario.php');
    $modelo = new \ModeloInventario();
    $resultado = $modelo->eliminarProducto($id);

    if ($resultado) {
        return response('ok', 200);
    } else {
        return response('error', 500);
    }
}

}
