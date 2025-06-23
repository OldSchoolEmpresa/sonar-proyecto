<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class PanelController extends Controller
{
    /**
     * Método privado reutilizable para cargar y renderizar archivos PHP como respuesta HTML.
     */
    private function renderPHPFile($relativePath)
    {
        $fullPath = base_path($relativePath);

        if (!File::exists($fullPath)) {
            abort(404, "Archivo no encontrado: $relativePath");
        }

        ob_start();
        include_once $fullPath;
        $content = ob_get_clean();

        return response($content, 200)
            ->header('Content-Type', 'text/html');
    }

    public function administrador()
    {
        return $this->renderPHPFile('public/administrador.php');
    }

    public function inicio()
    {
        return $this->renderPHPFile('app/vista/inicio.php');
    }

    public function modelo()
    {
        return $this->renderPHPFile('app/modelo/modelo.php');
    }

    public function inventario()
    {
        return $this->renderPHPFile('app/vista/inventario.php');
    }

    public function ganancias()
    {
        return $this->renderPHPFile('app/vista/ganancias.php');
    }

    public function configuracion()
    {
        return $this->renderPHPFile('app/vista/configuracion.php');
    }

    public function logout()
    {
        return $this->renderPHPFile('app/vista/logout.php');
    }
}