import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 🔹 Importar RouterModule

@Component({
  selector: 'app-miscelanea',
  standalone: true,
  imports: [RouterModule], // 🔹 Agregar RouterModule aquí
  templateUrl: './miscelanea.component.html',
  styleUrl: './miscelanea.component.css'
})
export class MiscelaneaComponent {}
