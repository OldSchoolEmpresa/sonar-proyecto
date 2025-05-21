<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('empleadocliente', function (Blueprint $table) {
            $table->string('passwordEmpleado', 255)->change();
        });
    }

    public function down()
    {
        Schema::table('empleadocliente', function (Blueprint $table) {
            $table->string('passwordEmpleado', 60)->change();
        });
    }
};
