import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent {
  pedidoData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.pedidoData = navigation?.extras?.state?.['pedidoData'];
  }

  calcularTotal(): number {
    if (!this.pedidoData || !this.pedidoData.productos) {
      return 0;
    }

    return this.pedidoData.productos.reduce(
      (total: number, item: any) => total + item.subtotal,
      0
    );
  }
}
