import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  correoEmpleado: string = '';
  passwordEmpleado: string = '';

  mensaje: string = '';
  tipoMensaje: 'exito' | 'error' | 'alerta' | '' = '';
  mostrarMensaje: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    // ⚠️ Validación local antes de enviar
    if (!this.correoEmpleado || !this.passwordEmpleado) {
      this.mensaje = 'Debes llenar todos los campos ⚠️';
      this.tipoMensaje = 'alerta';
      this.mostrarMensaje = true;
      return;
    }

    const datos = {
      correoEmpleado: this.correoEmpleado,
      passwordEmpleado: this.passwordEmpleado
    };

    this.authService.loginEmpleado(datos).subscribe(
      res => {
        if (res?.token || res?.success) {
          this.mensaje = 'Inicio de sesión exitoso ✅';
          this.tipoMensaje = 'exito';
          this.mostrarMensaje = true;

          localStorage.setItem('token', res.token || ''); // asegura que se guarda algo

          setTimeout(() => {
            this.router.navigate(['/miscelanea']);
          }, 1000);
        } else {
          this.mensaje = 'Correo o contraseña incorrectos ❌';
          this.tipoMensaje = 'error';
          this.mostrarMensaje = true;
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
        this.mensaje = 'Error de conexión con el servidor ❌';
        this.tipoMensaje = 'error';
        this.mostrarMensaje = true;
      }
    );
  }
}
