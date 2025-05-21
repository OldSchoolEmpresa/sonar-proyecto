<?php

namespace App\Http\Controllers;

use App\Models\EmpleadoModelo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class EmpleadoControlador extends Controller
{
    public function index()
    {
        $empleados = EmpleadoModelo::all();
        if ($empleados->isEmpty()) {
            return response()->json([
                'message' => 'No hay empleados registrados',
                'status'  => 404
            ], 404);
        }
        return response()->json($empleados, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idEmpleado'       => 'required|numeric',
            'nombreEmpleado'   => 'required|min:2|max:40',
            'correoEmpleado'   => 'required|email',
            // Ampliamos max a 255 para aceptar hash bcrypt (~60 chars)
            'passwordEmpleado' => 'required|string|min:6|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $empleado = EmpleadoModelo::create([
            'idEmpleado'       => $request->idEmpleado,
            'nombreEmpleado'   => $request->nombreEmpleado,
            'correoEmpleado'   => $request->correoEmpleado,
            // Guardamos el hash directamente en passwordEmpleado
            'passwordEmpleado' => Hash::make($request->passwordEmpleado),
        ]);

        if (! $empleado) {
            return response()->json([
                'message' => 'Error al registrar el empleado',
                'status'  => 500
            ], 500);
        }

        return response()->json([
            'empleado' => $empleado,
            'status'   => 201
        ], 201);
    }

    public function show($idEmpleado)
    {
        $empleado = EmpleadoModelo::find($idEmpleado);
        if (! $empleado) {
            return response()->json([
                'message' => 'Empleado no existe',
                'status'  => 404
            ], 404);
        }
        return response()->json([
            'empleado' => $empleado,
            'status'   => 200
        ], 200);
    }

    public function update(Request $request, $idEmpleado)
    {
        $empleado = EmpleadoModelo::find($idEmpleado);
        if (! $empleado) {
            return response()->json([
                'message' => 'Empleado no encontrado',
                'status'  => 404
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'idEmpleado'       => 'required|numeric',
            'nombreEmpleado'   => 'required|min:2|max:40',
            'correoEmpleado'   => 'required|email',
            // Igual ampliamos aquí
            'passwordEmpleado' => 'nullable|string|min:6|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Error en la validación de datos',
                'errors'  => $validator->errors(),
                'status'  => 400
            ], 400);
        }

        $empleado->idEmpleado     = $request->idEmpleado;
        $empleado->nombreEmpleado = $request->nombreEmpleado;
        $empleado->correoEmpleado = $request->correoEmpleado;

        if ($request->filled('passwordEmpleado')) {
            $empleado->passwordEmpleado = Hash::make($request->passwordEmpleado);
        }

        $empleado->save();

        return response()->json([
            'message'  => 'Empleado modificado',
            'empleado' => $empleado,
            'status'   => 200
        ], 200);
    }

    public function destroy($idEmpleado)
    {
        $empleado = EmpleadoModelo::find($idEmpleado);
        if (! $empleado) {
            return response()->json([
                'message' => 'Empleado no encontrado',
                'status'  => 404
            ], 404);
        }

        $empleado->delete();

        return response()->json([
            'message' => 'Empleado eliminado',
            'status'  => 200
        ], 200);
    }
}
