<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function eliminar(Request $request)
    {
        $id = $request->input('id');

        include_once base_path('app/modelo/modelo.php');
        $modelo = new \Modelo();
        $resultado = $modelo->eliminarUsuario($id);

        if ($resultado) {
            return response()->json(['message' => 'Eliminado']);
        } else {
            return response()->json(['error' => 'No se pudo eliminar'], 500);
        }
    }

    public function agregar(Request $request)
    {
        $nombre = $request->input('nombre');
        $email = $request->input('email');
        $contrasena = $request->input('contrasena');
        $ciudad = $request->input('ciudad');
        $direccion = $request->input('direccion');
        $telefono = $request->input('telefono');

        include_once base_path('app/modelo/modelo.php');
        $modelo = new \Modelo();
        $resultado = $modelo->agregarUsuario($nombre, $email, $contrasena, $ciudad, $direccion, $telefono);

        if ($resultado) {
            return response()->json(['message' => 'Agregado']);
        } else {
            return response()->json(['error' => 'No se pudo agregar'], 500);
        }
    }
    public function editar(Request $request)
{
    $id = $request->input('id');
    $nombre = $request->input('nombre');
    $email = $request->input('email');
    $contrasena = $request->input('contrasena');
    $ciudad = $request->input('ciudad');
    $direccion = $request->input('direccion');
    $telefono = $request->input('telefono');

    include_once base_path('app/modelo/modelo.php');
    $modelo = new \Modelo();
    $resultado = $modelo->editarUsuario($id, $nombre, $email, $contrasena, $ciudad, $direccion, $telefono);

    if ($resultado) {
        return response()->json(['message' => 'Editado']);
    } else {
        return response()->json(['error' => 'No se pudo editar'], 500);
    }
}

}
