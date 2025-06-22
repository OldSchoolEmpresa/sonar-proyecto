<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class PanelController extends Controller
{
    public function administrador()
{
    ob_start();
    include base_path('public/administrador.php'); // Así estás apuntando a public/
    $contenido = ob_get_clean();

    return response($contenido, 200)->header('Content-Type', 'text/html');
}


    public function inicio()
    {
        include base_path('app/vista/inicio.php');
        exit;
    }

    public function modelo()
    {
        ob_start();
        include base_path('app/modelo/modelo.php');
        $contenido = ob_get_clean();
        return response($contenido, 200)->header('Content-Type', 'text/html');
    }

    public function inventario()
    {
        ob_start();
        include base_path('app/vista/inventario.php');
        $contenido = ob_get_clean();
        return response($contenido, 200)->header('Content-Type', 'text/html');
    }

    public function ganancias()
    {
        ob_start();
        include base_path('app/vista/ganancias.php');
        $contenido = ob_get_clean();
        return response($contenido, 200)->header('Content-Type', 'text/html');
    }

    public function configuracion()
    {
        ob_start();
        include base_path('app/vista/configuracion.php');
        $contenido = ob_get_clean();
        return response($contenido, 200)->header('Content-Type', 'text/html');
    }

    public function logout()
    {
        ob_start();
        include base_path('app/vista/logout.php');
        $contenido = ob_get_clean();
        return response($contenido, 200)->header('Content-Type', 'text/html');
    }
}
