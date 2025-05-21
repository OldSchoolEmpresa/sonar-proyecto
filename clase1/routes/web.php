    <?php


    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\AuthController;



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