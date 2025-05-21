import { Component } from '@angular/core';


interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  vendidos: number;
  fechaLlegada: string;
  estado: string;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  productos: Producto[] = [

      { id: 1, nombre: 'Laptop ASUS', categoria: 'Electrónica', precio: 1200, stock: 5, vendidos: 10, fechaLlegada: '2025-03-05', estado: 'Disponible' },
      { id: 2, nombre: 'Teclado Mecánico RGB', categoria: 'Accesorios', precio: 80, stock: 0, vendidos: 25, fechaLlegada: '2025-02-28', estado: 'Agotado' },
      { id: 3, nombre: 'Monitor 24” 144Hz', categoria: 'Electrónica', precio: 250, stock: 8, vendidos: 15, fechaLlegada: '2025-03-02', estado: 'Disponible' }
    ];
  
  agregarProducto() {
    const nuevoProducto: Producto = {
      id: this.productos.length + 1,
      nombre: 'Nuevo Producto',
      categoria: 'Categoría',
      precio: 100,
      stock: 20,
      vendidos: 0,
      fechaLlegada: new Date().toISOString().split('T')[0],
      estado: 'Disponible'
    };
    this.productos.push(nuevoProducto);
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
}
