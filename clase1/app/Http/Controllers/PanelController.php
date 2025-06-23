<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class PanelController extends Controller
{
    public function administrador()
{
    ob_start();
   class TuControlador
{
    public function inicio()
    {
        include_once 'app/vista/inicio.php';
        exit;
    }

    public function modelo()
    {
        ob_start();
        include_once 'app/modelo/modelo.php';
        $contenido = ob_get_clean();
        devolverrespuesta($contenido, 200)->encabezado('Content-Type', 'text/html');
    }

    public function inventario()
    {
        ob_start();
        include_once 'app/vista/inventario.php';
        $contenido = ob_get_clean();
        devolverrespuesta($contenido, 200)->encabezado('Content-Type', 'text/html');
    }

    public function ganancias()
    {
        ob_start();
        include_once 'app/vista/ganancias.php';
        $contenido = ob_get_clean();
        devolverrespuesta($contenido, 200)->encabezado('Content-Type', 'text/html');
    }

    public function configuracion()
    {
        ob_start();
        include_once 'app/vista/configuracion.php';
        $contenido = ob_get_clean();
        devolverrespuesta($contenido, 200)->encabezado('Content-Type', 'text/html');
    }

    public function cerrarSesion()
    {
        ob_start();
        include_once 'app/vista/logout.php';
        $contenido = ob_get_clean();
        devolverrespuesta($contenido, 200)->encabezado('Content-Type', 'text/html');
    }
}
