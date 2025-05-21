import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

@Component({
  selector: 'app-pedido-confirmado',
  standalone: true, // Esto es clave para componentes independientes
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí
  templateUrl: './pedido-confirmado.component.html',
  styleUrls: ['./pedido-confirmado.component.css']
})
export class PedidoConfirmadoComponent {
  // Modelo para los datos del formulario
  datosPedido = {
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    direccion: '',
    fecha: '',
    metodoPago: ''
  };

  // Estado del formulario
  pedidoEnviado = false;
  pedidoExitoso = false;
  mensajeError = '';

  confirmarPedido(formulario: any) {
    if (formulario.invalid) {
      this.mensajeError = '¡Completa todos los campos, maldita sea!';
      return;
    }

    this.pedidoEnviado = true;
    this.mensajeError = '';

    // Simulación de envío (en producción sería una llamada HTTP)
    setTimeout(() => {
      this.pedidoExitoso = true;
      this.pedidoEnviado = false;
      
      // Si hubiera error:
      // this.pedidoExitoso = false;
      // this.mensajeError = '¡Error! ¿Qué hiciste ahora?';
    }, 1500);
  }
}