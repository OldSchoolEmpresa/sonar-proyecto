<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpleadoCliente extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'empleadocliente';

    protected $fillable = ['correoEmpleado', 'passwordEmpleado'];

    public function getAuthPassword()
    {
        return $this->passwordEmpleado;
    }

    public function getEmailForPasswordReset()
    {
        return $this->correoEmpleado;
    }
  }