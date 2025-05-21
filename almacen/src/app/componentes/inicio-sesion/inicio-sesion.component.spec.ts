import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponentComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      correoEmpleado: ['', [Validators.required, Validators.email]],
      passwordEmpleado: ['', Validators.required],
      rol: ['cliente', Validators.required] // Se añade el campo 'rol' con valor predeterminado
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Aquí puedes manejar la lógica según el rol seleccionado
    }
  }
}
