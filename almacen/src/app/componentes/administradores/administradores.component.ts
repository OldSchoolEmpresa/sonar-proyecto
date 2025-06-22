import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-administradores',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent {
  correoAdministrador: string = '';
  passwordAdministrador: string = '';
  codigoAdministrador: string = '';
  sesionIniciada: boolean = false;
  iframeSrc: SafeResourceUrl = '';

  constructor(private authService: AuthService, private router: Router, private sanitizer: DomSanitizer) {}

  iniciarSesion() {
    const datos = {
      correoEmpleado: this.correoAdministrador,
      passwordEmpleado: this.passwordAdministrador,
      codigoadministrador: this.codigoAdministrador
    };

    this.authService.loginAdministrador(datos).subscribe(
      (res: any) => {
        if (res.success) {
          console.log('Token recibido:', res.token);
          localStorage.setItem('token', res.token);
          alert('Inicio de sesión exitoso ✅');
          this.sesionIniciada = true;

          // 🔥 Aquí cargamos la URL dinámica del iframe
         if (res.success) {
  this.sesionIniciada = true;
  this.loadIframe('http://52.225.87.160/administrador'); // 🔥 Cargar el iframe después del login
}
        }
      },
      (error: any) => {
        console.error('Error en la solicitud:', error);
        alert('Correo o contraseña incorrectos ❌');
      }
    );
  }

  loadIframe(url: string): void {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
