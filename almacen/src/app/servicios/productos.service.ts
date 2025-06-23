import { Injectable } from '@angular/core';

export interface ColorVariante {
  nombre: string;
  codigo: string;
  imagenes: string[];
}

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  tiempoEntrega: string;
  colores: ColorVariante[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camiseta Broklin',
      precio: 170000,
      descripcion: 'Camiseta edición urbana con diseño de Broklin',
      tiempoEntrega: '2-4 días hábiles',
      colores: [
        {
          nombre: 'Cafe',
          codigo: '#7a5207',
          imagenes: ['asset/img/chaqueta Broklin cafe.webp']
        },
        {
          nombre: 'Negro',
          codigo: '#000000',
          imagenes: ['asset/img/chaqueta Broklin negro.webp']
        },
        {
          nombre: 'Blanco',
          codigo: '#ffffff',
          imagenes: ['asset/img/chaqueta Broklin blanco.webp']
        }
      ]
    },
    {
      id: 2,
      nombre: 'Buzo Movement',
      precio: 180000,
      descripcion: 'Buzo premium con diseño moderno y cómodo',
      tiempoEntrega: '3-5 días hábiles',
      colores: [
        {
          nombre: 'Beach',
          codigo: '#F5DEB3',
          imagenes: ['/asset/img/Buzo Movement beach.jpeg']
        },
        {
          nombre: 'Gris',
          codigo: '#808080',
          imagenes: ['/asset/img/Buzo Movement gris.jpeg']
        },
        {
          nombre: 'Negro',
          codigo: '#000000',
          imagenes: ['/asset/img/Buzo Movement negro.jpeg']
        },
        {
          nombre: 'Verde',
          codigo: '#0a793c',
          imagenes: ['/asset/img/Buzo Movement verde.jpeg']
        }
      ]
    },
    {
      id: 3,
      nombre: 'Buzo Los Angeles',
      precio: 200000,
      descripcion: 'Buzo de alta calidad con estampado de Los Angeles',
      tiempoEntrega: '3-5 días hábiles',
      colores: [
        {
          nombre: 'Negro',
          codigo: '#000000',
          imagenes: ['/asset/img/buso los angeles negra.jpg']
        },
        {
          nombre: 'Blanco',
          codigo: '#FFFFFF',
          imagenes: ['/asset/img/Buso los angeles blanco.jpg']
        },
        {
          nombre: 'Azul',
          codigo: '#2a6eff',
          imagenes: ['/asset/img/Buso los angeles azul.jpeg']
        },
        {
          nombre: 'Rojo',
          codigo: '#FF0000',
          imagenes: ['/asset/img/los angeles rojo.jpeg']
        },
        {
          nombre: 'Verde',
          codigo: '#0a793c',
          imagenes: ['/asset/img/Buso los angeles verde.jpeg']
        }
      ]
    },
    {
    id: 4,
    nombre: 'TP Streetwear',
    precio: 190000,
    descripcion: 'Chaqueta TP',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/chaqueta TP negro.webp']
      },
      {
        nombre: 'Verde',
        codigo: '#0a793c',
        imagenes: ['asset/img/chaqueta TP verde.webp']
      },
      {
        nombre: 'Cafe',
        codigo: '#a07b17',
        imagenes: ['asset/img/chaqueta TP cafe.webp']
      }
    ]
  },

  ];

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
