<?php

use App\Http\controllers\empleadoControlador;
use App\Http\controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PedidoController; // Nuevo controlador
use App\Http\Controllers\LoginController;


Route::get('/empleado', [empleadocontrolador::class, 'index']);
Route::post('/empleado', [empleadoControlador::class, 'store']);
Route::get('/empleado/{idEmpleado}', [empleadocontrolador::class, 'show']);
Route::post('/empleado', [empleadocontrolador::class, 'store']);
Route::put('/empleado/{idEmpleado}', [empleadocontrolador::class, 'update']);
Route::delete('/empleado/{idEmpleado}', [empleadocontrolador::class, 'destroy']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [EmpleadoController::class, 'register']);
Route::post('/pedidos', [PedidoController::class, 'store']);
Route::get('/pedidos', [PedidoController::class, 'index']);
Route::get('/pedidos/{id}', [PedidoController::class, 'show']);
Route::post('/pedidos', [PedidoController::class, 'store']);
Route::post('/register', [AuthController::class, 'store']);

