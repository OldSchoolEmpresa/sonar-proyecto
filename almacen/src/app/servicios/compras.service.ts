import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Interfaces mejoradas para una mejor organización
export interface ProductoCompra {
  nombre: string;
  precio: number;
  imagen: string;
  color: string;
  talla: string;
}

export interface UsuarioCompra {
  nombre: string;
  direccion: string;
  email: string;
}

export interface Pedido {
  id: string;
  producto: ProductoCompra;
  cantidad: number;
  fecha: string;
  estado: 'pendiente' | 'completado' | 'cancelado';
  fechaEntregaEstimada: string;
  usuario: UsuarioCompra;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  private misComprasSource = new BehaviorSubject<Pedido[]>([]);
  public misCompras$ = this.misComprasSource.asObservable();

  constructor() {
    this.cargarComprasIniciales();
  }

  private cargarComprasIniciales(): void {
    const comprasGuardadas = localStorage.getItem('misCompras');
    if (comprasGuardadas) {
      try {
        const comprasParseadas = JSON.parse(comprasGuardadas);
        this.misComprasSource.next(comprasParseadas);
      } catch (error) {
        console.error('Error al parsear compras guardadas:', error);
        localStorage.removeItem('misCompras');
      }
    }
  }

  agregarCompra(nuevoPedido: Omit<Pedido, 'id' | 'estado'>): void {
    const pedidoCompleto: Pedido = {
      ...nuevoPedido,
      id: this.generarIdUnico(),
      estado: 'pendiente'
    };

    const comprasActuales = this.misComprasSource.value;
    const nuevasCompras = [...comprasActuales, pedidoCompleto];
    
    this.actualizarCompras(nuevasCompras);
  }

  actualizarEstadoCompra(id: string, nuevoEstado: 'pendiente' | 'completado' | 'cancelado'): void {
    const comprasActualizadas = this.misComprasSource.value.map(compra => {
      if (compra.id === id) {
        return { ...compra, estado: nuevoEstado };
      }
      return compra;
    });

    this.actualizarCompras(comprasActualizadas);
  }

  private actualizarCompras(nuevasCompras: Pedido[]): void {
    this.misComprasSource.next(nuevasCompras);
    this.guardarEnLocalStorage(nuevasCompras);
  }

  private guardarEnLocalStorage(compras: Pedido[]): void {
    localStorage.setItem('misCompras', JSON.stringify(compras));
  }

  private generarIdUnico(): string {
    return 'ped-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  // Método opcional para desarrollo: limpiar todas las compras
  limpiarCompras(): void {
    this.misComprasSource.next([]);
    localStorage.removeItem('misCompras');
  }
}

// Exportación adicional para facilitar la importación en otros componentes
export const COMPRAS_PROVIDERS = [
  ComprasService
];

export type { Pedido as PedidoCompras };