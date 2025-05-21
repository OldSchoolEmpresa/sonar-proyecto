import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ComprasService, Pedido as PedidoCompras } from '../../servicios/compras.service';

interface ColorVariante {
  nombre: string;
  codigo: string;
  imagenes: string[];
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  tiempoEntrega: string;
  colores: ColorVariante[];
}

interface PedidoVenta {
  producto: Producto;
  cantidad: number;
  talla: string;
  colorSeleccionado: ColorVariante;
  imagenActual: string;
  indiceImagen: number;
  fechaEstimada: string;
  usuario: {
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
  };
}

@Component({
  selector: 'app-ventas-chaqueta-a',
  templateUrl: './ventas-chaqueta-a.component.html',
  styleUrls: ['./ventas-chaqueta-a.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [ComprasService]
})
export class VentasChaquetaAComponent {
  mostrarConfirmacion = false;
  errorMessage = '';
  cargando = false;
  tallasDisponibles: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  productoActual: Producto = {
    id: 1,
    nombre: 'Chaqueta A',
    precio: 200000,
    descripcion: 'Chaqueta edición limitada',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['/assets/img/chaqueta-negra.jpg']
      },
      {
        nombre: 'Gris',
        codigo: '#888888',
        imagenes: ['/assets/img/chaqueta-gris.jpg']
      }
    ]
  };

  pedido: PedidoVenta = {
    producto: this.productoActual,
    cantidad: 1,
    talla: '',
    colorSeleccionado: this.productoActual.colores[0],
    imagenActual: this.productoActual.colores[0].imagenes[0],
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
    private http: HttpClient,
    private router: Router,
    private comprasService: ComprasService
  ) {
    this.calcularFechaEntrega();
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }

  calcularFechaEntrega(): void {
    const hoy = new Date();
    const diasEntrega = this.productoActual.tiempoEntrega.split('-')[0];
    const fechaEntrega = new Date(hoy);
    fechaEntrega.setDate(hoy.getDate() + parseInt(diasEntrega));
    this.pedido.fechaEstimada = fechaEntrega.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  seleccionarImagen(index: number): void {
    this.pedido.indiceImagen = index;
    this.pedido.imagenActual = this.pedido.colorSeleccionado.imagenes[index];
  }

  cambiarImagen(direccion: number): void {
    const imagenes = this.pedido.colorSeleccionado.imagenes;
    this.pedido.indiceImagen = (this.pedido.indiceImagen + direccion + imagenes.length) % imagenes.length;
    this.pedido.imagenActual = imagenes[this.pedido.indiceImagen];
  }

  seleccionarColor(color: ColorVariante): void {
    this.pedido.colorSeleccionado = color;
    this.seleccionarImagen(0);
  }

  confirmarCompra(): void {
    if (!this.pedido.talla.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Datos incompletos',
        text: 'Por favor, selecciona una talla.',
        confirmButtonColor: '#888888'
      });
      return;
    }
    this.errorMessage = '';
    this.mostrarConfirmacion = true;
  }

  finalizarCompra(): void {
    if (!this.pedido.talla || !this.pedido.usuario.nombre || 
        !this.pedido.usuario.email || !this.pedido.usuario.direccion || 
        !this.pedido.usuario.telefono) {
      Swal.fire({
        icon: 'warning',
        title: 'Datos incompletos',
        text: 'Por favor complete todos los campos obligatorios',
        confirmButtonColor: '#888888'
      });
      return;
    }

    if (!this.validarEmail(this.pedido.usuario.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor ingrese un email válido',
        confirmButtonColor: '#888888'
      });
      return;
    }

    const pedidoParaEnviar = {
      producto: this.pedido.producto.nombre,
      color: this.pedido.colorSeleccionado.nombre,
      talla: this.pedido.talla,
      cantidad: this.pedido.cantidad,
      precioUnitario: this.pedido.producto.precio,
      subtotal: this.pedido.producto.precio * this.pedido.cantidad,
      imagen: this.pedido.imagenActual,
      usuario: {
        nombre: this.pedido.usuario.nombre,
        direccion: this.pedido.usuario.direccion,
        telefono: this.pedido.usuario.telefono,
        email: this.pedido.usuario.email
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    this.cargando = true;
    this.errorMessage = '';

    const url = 'http://localhost:8000/api/pedido.php';
    
    this.http.post(url, pedidoParaEnviar, httpOptions).subscribe({
      next: (response: any) => {
        // Preparar datos para el servicio de compras
        const pedidoParaCompras: Omit<PedidoCompras, 'id' | 'estado'> = {
          producto: {
            nombre: this.pedido.producto.nombre,
            precio: this.pedido.producto.precio,
            imagen: this.pedido.imagenActual,
            color: this.pedido.colorSeleccionado.nombre,
            talla: this.pedido.talla
          },
          cantidad: this.pedido.cantidad,
          fecha: new Date().toISOString(),
          fechaEntregaEstimada: this.pedido.fechaEstimada,
          usuario: {
            nombre: this.pedido.usuario.nombre,
            direccion: this.pedido.usuario.direccion,
            email: this.pedido.usuario.email
          },
          total: this.pedido.producto.precio * this.pedido.cantidad
        };

        // Guardar en el servicio de compras
        this.comprasService.agregarCompra(pedidoParaCompras);

        const pedidoParaDetalle = {
          numero: 'PED-' + Date.now().toString().slice(-6),
          fecha: new Date().toLocaleDateString(),
          metodoPago: 'Transferencia Bancaria',
          plazoEntrega: this.pedido.producto.tiempoEntrega,
          observaciones: 'Pedido registrado correctamente',
          cliente: {
            nombre: this.pedido.usuario.nombre,
            documento: '',
            direccion: this.pedido.usuario.direccion,
            telefono: this.pedido.usuario.telefono,
            email: this.pedido.usuario.email
          },
          productos: [{
            codigo: this.pedido.producto.id.toString(),
            nombre: `${this.pedido.producto.nombre} - Color: ${this.pedido.colorSeleccionado.nombre} - Talla: ${this.pedido.talla}`,
            cantidad: this.pedido.cantidad,
            precioUnitario: this.pedido.producto.precio,
            subtotal: this.pedido.producto.precio * this.pedido.cantidad,
            imagen: this.pedido.imagenActual
          }]
        };

        Swal.fire({
          icon: 'success',
          title: '¡Compra realizada con éxito!',
          text: 'Serás redirigido al detalle de tu pedido',
          confirmButtonColor: '#888888',
          timer: 3000,
          timerProgressBar: true
        }).then(() => {
          this.router.navigate(['/detalle-pedido'], { 
            state: { pedidoData: pedidoParaDetalle } 
          });
        });

        this.resetearFormulario();
        this.cargando = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error completo:', err);
        this.errorMessage = this.obtenerMensajeError(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.errorMessage,
          confirmButtonColor: '#888888'
        });
        this.cargando = false;
      }
    });
  }

  private validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  private obtenerMensajeError(err: HttpErrorResponse): string {
    if (err.status === 0) {
      return 'Error de conexión. Verifique que el servidor esté corriendo';
    } else if (err.status === 400) {
      return 'Datos incorrectos: ' + (err.error.message || 'Verifique la información');
    } else if (err.status === 404) {
      return 'Endpoint no encontrado. Verifique la URL';
    } else if (err.status === 500) {
      return 'Error interno del servidor';
    } else {
      return `Error ${err.status}: ${err.message}`;
    }
  }

  private resetearFormulario(): void {
    this.pedido = {
      producto: this.productoActual,
      cantidad: 1,
      talla: '',
      colorSeleccionado: this.productoActual.colores[0],
      imagenActual: this.productoActual.colores[0].imagenes[0],
      indiceImagen: 0,
      fechaEstimada: '',
      usuario: {
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
      }
    };
    this.calcularFechaEntrega();
    this.mostrarConfirmacion = false;
  }
}