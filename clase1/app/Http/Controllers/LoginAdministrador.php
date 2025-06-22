<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginAdministrador extends Controller
{
    public function login(Request $request)
    {
        $correo = $request->input('correoEmpleado');
        $password = $request->input('passwordEmpleado');
        $codigoAdministrador = (string) $request->input('codigoadministrador'); // ⚠️ fuerza a string

        // Buscar el administrador en la tabla empleadocliente
        $usuario = DB::table('empleadocliente')->where('correoEmpleado', $correo)->first();

        if (!$usuario) {
            return response()->json(['success' => false, 'message' => 'Usuario no encontrado'], 401);
        }

        // Validar contraseña
        if (!Hash::check($password, $usuario->passwordEmpleado)) {
            return response()->json(['success' => false, 'message' => 'Contraseña incorrecta'], 401);
        }

        // Verificar código de administrador
        if ((string) $usuario->codigoadministrador !== $codigoAdministrador) {
            return response()->json(['success' => false, 'message' => 'Código de administrador incorrecto'], 401);
        }

        // Generar token
        $token = bin2hex(random_bytes(16));

        return response()->json([
            'success' => true,
            'token' => $token,
            'message' => 'Inicio de sesión exitoso'
        ]);
    }
}
