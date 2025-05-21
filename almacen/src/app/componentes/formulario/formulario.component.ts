import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import bcrypt from 'bcryptjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  form: FormGroup;
  showPassword = false;
  registroExitoso = false;

  private apiUrl = 'http://localhost:8000/api/empleado';

  constructor(private http: HttpClient, private router: Router) {
    this.form = new FormGroup({
      idEmpleado: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]),
      nombreEmpleado: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      ]),
      correoEmpleado: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordEmpleado: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/)
      ])
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('⚠️ Por favor revisa los campos.');
      return;
    }

    const fv = this.form.value;

    // 🔐 Encriptar la contraseña en cliente
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(fv.passwordEmpleado, salt);

    const payload = {
      idEmpleado: fv.idEmpleado,
      nombreEmpleado: fv.nombreEmpleado,
      correoEmpleado: fv.correoEmpleado,
      passwordEmpleado: hash
    };

    this.http.post(this.apiUrl, payload, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: () => {
        this.registroExitoso = true;
        setTimeout(() => alert('✅ Te registraste correctamente.'), 500);
        this.router.navigate(['/formulario']);
      },
      error: err => {
        console.error('Error detalle:', err.error);
        alert('❌ ' + (err.error.message || 'Error en validación'));
      }
    });
  }
}
