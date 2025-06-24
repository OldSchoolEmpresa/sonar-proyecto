import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductosService, Producto, ColorVariante } from '../../servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas-generico',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-generico.component.html',
  styleUrls: ['./ventas-generico.component.css']
})
export class VentasGenericoComponent implements OnInit {
  producto!: Producto;
  mostrarConfirmacion = false;

  pedido = {
    producto: {} as Producto,
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
  constructor(
    private readonly ruta: ActivatedRoute,
    private readonly productosServicio: ProductosService,
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    const productoEncontrado = this.productosServicio.getProductoPorId(id);

    if (!productoEncontrado) {
      Swal.fire('Error', 'Producto no encontrado', 'error');
      return;
    }

    this.producto = productoEncontrado;
    this.inicializarPedido();
  }

  inicializarPedido() {
    this.pedido.producto = this.producto;
    this.pedido.colorSeleccionado = this.producto.colores[0];
    this.pedido.imagenActual = this.producto.colores[0].imagenes[0];
    this.pedido.indiceImagen = 0;
    this.calcularFechaEntrega();
  }

  seleccionarColor(color: ColorVariante): void {
    this.pedido.colorSeleccionado = color;
    this.pedido.indiceImagen = 0;
    this.pedido.imagenActual = color.imagenes[0];
  }

  seleccionarImagen(i: number): void {
    this.pedido.indiceImagen = i;
    this.pedido.imagenActual = this.pedido.colorSeleccionado!.imagenes[i];
  }

  calcularFechaEntrega(): void {
    const hoy = new Date();
    const dias = parseInt(this.producto.tiempoEntrega.split('-')[0], 10);
    hoy.setDate(hoy.getDate() + dias);
    this.pedido.fechaEstimada = hoy.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }

  confirmarCompra(): void {
    if (!this.pedido.talla || !this.pedido.colorSeleccionado) {
      Swal.fire('Atención', 'Selecciona talla y color', 'warning');
      return;
    }
    this.mostrarConfirmacion = true;
  }

  finalizarCompra(): void {
    const u = this.pedido.usuario;
    if (!u.nombre || !u.direccion || !u.telefono || !u.email || !this.pedido.talla) {
      Swal.fire('Atención', 'Completa todos los campos del pedido', 'warning');
      return;
    }

    const pedidoParaEnviar = {
      producto: this.pedido.producto.nombre,
      color: this.pedido.colorSeleccionado!.nombre,
      talla: this.pedido.talla,
      cantidad: this.pedido.cantidad,
      precioUnitario: this.pedido.producto.precio,
      subtotal: this.pedido.producto.precio * this.pedido.cantidad,
      imagen: this.pedido.imagenActual,
      usuario: u
    };

    const url = 'http://localhost/laravel/clase1/app/modelo/pedido.php';

    this.http.post(url, pedidoParaEnviar).subscribe({
      next: (res: any) => {
        Swal.fire('Éxito', 'Pedido registrado correctamente', 'success')
          .then(() => {
            this.router.navigate(['/detalle-pedido'], {
              state: { pedidoData: pedidoParaEnviar }
            });
          });
      },
      error: () => {
        Swal.fire('Error', 'No se pudo registrar el pedido', 'error');
      }
    });
  }
}
