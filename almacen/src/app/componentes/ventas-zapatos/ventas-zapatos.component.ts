import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosZapatosService, ProductoZapato, ColorVariante } from '../../servicios/productos-zapatos.service';

@Component({
  selector: 'app-ventas-zapatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-zapatos.component.html',
  styleUrls: ['./ventas-zapatos.component.css']
})
export class VentasZapatosComponent implements OnInit {
  producto!: ProductoZapato;
  mostrarConfirmacion = false;

  pedido = {
    producto: {} as ProductoZapato,
    cantidad: 1,
    talla: '',
    colorSeleccionado: null as ColorVariante | null,
    imagenActual: '',
    indiceImagen: 0,
    fechaEstimada: '',
    usuario: {
      nombre: '',
      direccion: '',
      telefono: '',
      email: ''
    }
  };

  constructor(private productosZapatosService: ProductosZapatosService) {}

  ngOnInit(): void {
    const producto = this.productosZapatosService.getProductoPorId(1); // ID fijo o dinámico
    if (producto) {
      this.producto = producto;
      this.pedido.producto = producto;
      this.pedido.colorSeleccionado = producto.colores[0];
      this.pedido.imagenActual = producto.colores[0].imagenes[0];
    }
  }

  seleccionarColor(color: ColorVariante): void {
    this.pedido.colorSeleccionado = color;
    this.pedido.indiceImagen = 0;
    this.pedido.imagenActual = color.imagenes[0];
  }

  seleccionarImagen(index: number): void {
    this.pedido.indiceImagen = index;
    this.pedido.imagenActual = this.pedido.colorSeleccionado?.imagenes[index] || '';
  }

  confirmarCompra(): void {
    this.mostrarConfirmacion = true;
    this.pedido.fechaEstimada = this.calcularFechaEstimada();
  }

  calcularFechaEstimada(): string {
    const dias = 5;
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toLocaleDateString();
  }

  finalizarCompra(): void {
    // lógica de envío a backend o visualización de éxito
    console.log('Pedido finalizado:', this.pedido);
  }

  formatPrice(precio: number): string {
    return `$${precio.toLocaleString()}`;
  }
}
