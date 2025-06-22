    <?php


    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\AuthController;
    use App\Http\Controllers\PanelController;
    use App\Http\Controllers\UsuarioController;
    use App\Http\Controllers\CrudInventarioController;
    use App\Http\Controllers\LoginAdministrador;
    use App\Http\Controllers\LoginController;



    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider and all of them will
    | be assigned to the "web" middleware group. Make something great!
    |
    */
Route::post('/login', [LoginController::class, 'login']);    
Route::post('/admin/login', [LoginAdministrador::class, 'login']);
Route::post('/eliminar_inventario', [CrudInventarioController::class, 'eliminar']);
Route::post('/editar', [UsuarioController::class, 'editar']);
Route::post('/agregar', [UsuarioController::class, 'agregar']);
Route::post('/eliminar', [UsuarioController::class, 'eliminar']);
Route::get('/administrador', [PanelController::class, 'administrador']); 
Route::get('/panel/inicio', [PanelController::class, 'inicio']);
Route::get('/panel/modelo', [PanelController::class, 'modelo']);
Route::get('/panel/inventario', [PanelController::class, 'inventario']);
Route::get('/panel/ganancias', [PanelController::class, 'ganancias']);
Route::get('/panel/configuracion', [PanelController::class, 'configuracion']);
Route::get('/panel/logout', [PanelController::class, 'logout']);

    Route::get('/token', function () {
        return response()->json(['token' => csrf_token()]);
    });


    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::post('/register', [AuthController::class, 'store'])->name('register');
    Route::get('/user', [AuthController::class, 'show'])->name('user');


    Route::get('/', function () {
        return view('welcome');
    });
    // routes/web.php
    Route::get('/modelo', function () {
        include app_path('modelo/modelo.php'); // Incluye el archivo PHP
    });