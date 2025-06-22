<?php

use App\Http\controllers\empleadoControlador;
use App\Http\controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PedidoController; // Nuevo controlador
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LoginAdministrador;
use App\Http\Controllers\PanelController;



Route::get('/panel/inicio', [PanelController::class, 'inicio']);
Route::get('/panel/modelo', [PanelController::class, 'modelo']);
Route::get('/panel/inventario', [PanelController::class, 'inventario']);
Route::get('/panel/ganancias', [PanelController::class, 'ganancias']);
Route::get('/panel/configuracion', [PanelController::class, 'configuracion']);
Route::get('/panel/logout', [PanelController::class, 'logout']);
Route::post('/admin/login', [LoginAdministrador::class, 'login']);
Route::get('/empleado', [Empleadocontrolador::class, 'index']);
Route::post('/empleado', [EmpleadoControlador::class, 'store']);
Route::get('/empleado/{idEmpleado}', [Empleadocontrolador::class, 'show']);
Route::put('/empleado/{idEmpleado}', [Empleadocontrolador::class, 'update']);
Route::delete('/empleado/{idEmpleado}', [Empleadocontrolador::class, 'destroy']);
Route::post('/pedidos', [PedidoController::class, 'store']);
Route::get('/pedidos', [PedidoController::class, 'index']);
Route::get('/pedidos/{id}', [PedidoController::class, 'show']);
Route::post('/pedidos', [PedidoController::class, 'store']);
Route::post('/register', [AuthController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);
