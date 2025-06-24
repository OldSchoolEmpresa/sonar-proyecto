<?php
namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class PanelController extends Controller
{
    /**
     * Método privado reutilizable para cargar y renderizar archivos PHP como respuesta HTML.
     */
    private function renderizarPHPFile($rutaRelativa)
    {
        $rutaCompleta = base_path($rutaRelativa);
        if (!File::exists($rutaCompleta)) {
            abort(404, "Archivo no encontrado: $rutaRelativa");
        }

        ob_start();
        $contenido = ob_get_clean();

        return response($contenido, 200)
            ->header('Content-Type', 'text/html');
    }

    public function administrador()
    {
        return $this->renderizarPHPFile('public/administrador.php');
    }

    public function inicio()
    {
        return $this->renderizarPHPFile('app/vista/inicio.php');
    }

    public function modelo()
    {
        return $this->renderizarPHPFile('app/modelo/modelo.php');
    }

    public function inventario()
    {
        return $this->renderizarPHPFile('app/vista/inventario.php');
    }

    public function ganancias()
    {
        return $this->renderizarPHPFile('app/vista/ganancias.php');
    }

    public function configuracion()
    {
        return $this->renderizarPHPFile('app/vista/configuracion.php');
    }

    public function cerrarSesion()
    {
        return $this->renderizarPHPFile('app/vista/logout.php');
    }
}

