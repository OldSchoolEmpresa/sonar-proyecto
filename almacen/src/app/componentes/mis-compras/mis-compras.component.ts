import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComprasService, Pedido } from '../../servicios/compras.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MisComprasComponent implements OnInit {
  compras: Pedido[] = [];
  filtro: 'todos' | 'pendientes' | 'completados' = 'todos';
  estados = {
    pendiente: 'Pendiente',
    completado: 'Completado',
    cancelado: 'Cancelado'
  };

  constructor(private comprasService: ComprasService) {}

  ngOnInit(): void {
    this.comprasService.misCompras$.subscribe((compras: Pedido[]) => {
      this.compras = compras;
    });
  }

  cambiarEstado(compraId: string, nuevoEstado: 'pendiente' | 'completado' | 'cancelado'): void {
    this.comprasService.actualizarEstadoCompra(compraId, nuevoEstado);
  }

  get comprasFiltradas(): Pedido[] {
    if (this.filtro === 'todos') return this.compras;
    return this.compras.filter(c => c.estado === this.filtro.slice(0, -2)); // Remove 'es' from filtro
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'estado-pendiente';
      case 'completado': return 'estado-completado';
      case 'cancelado': return 'estado-cancelado';
      default: return 'estado-desconocido';
    }
  }

  getEstadoTexto(estado: string): string {
    return this.estados[estado as keyof typeof this.estados] || estado;
  }
}