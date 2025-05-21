<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EmpleadoCliente;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $user = EmpleadoCliente::where('correoEmpleado', $request->correoEmpleado)->first();

        if (!$user || !Hash::check($request->passwordEmpleado, $user->passwordEmpleado)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        $token = bin2hex(random_bytes(16));

        return response()->json([
            'status' => 'success',
            'token' => $token,
            'user' => [
                'id' => $user->idEmpleado,
                'nombre' => $user->nombreEmpleado,
                'correo' => $user->correoEmpleado
            ]
        ]);
    }
}
