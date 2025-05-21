<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class EmpleadoModelo extends Model
{
    use HasFactory;

    protected $table      = 'empleadocliente';
    protected $primaryKey = 'idEmpleado';
    public $timestamps    = false;

    // Permitir asignación masiva de passwordEmpleado
    protected $fillable = [
        'idEmpleado',
        'nombreEmpleado',
        'correoEmpleado',
        'passwordEmpleado',
    ];

    // Ocultar el hash al serializar
    protected $hidden = [
        'passwordEmpleado',
    ];
}