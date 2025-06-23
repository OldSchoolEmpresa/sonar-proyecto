import { Injectable } from '@angular/core';

export interface ColorVariante {
  nombre: string;
  codigo: string;
  imagenes: string[];
}

export interface ProductoZapato {
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
export class ProductosZapatosService {
  private productos: ProductoZapato[] = [
    {
      id: 1,
      nombre: 'Off-White',
      precio: 200000,
      descripcion: 'Zapatillas Off-White de edición limitada y gran estilo urbano',
      tiempoEntrega: '5-7 días hábiles',
      colores: [
        {
          nombre: 'Verde',
          codigo: '#007544',
          imagenes: ['asset/img/Off-White verde.jpeg']
        },
        {
          nombre: 'Blanco',
          codigo: '#ffffff',
          imagenes: ['asset/img/Off-White blanco.jpeg']
        }
      ]
    },
  {
    id: 2,
    nombre: 'Nike Air Max 90',
    precio: 280000,
    descripcion: 'Zapatillas Nike Air Max 90 con tecnología de amortiguación visible',
    tiempoEntrega: '4-6 días hábiles',
    colores: [
      {
        nombre: 'Azul',
        codigo: '#006cff',
        imagenes: ['/asset/img/Air max azul.jpeg']
      },
      {
        nombre: 'Blanco/Morado',
        codigo: '#ffffff',
        imagenes: ['/asset/img/Air max 90 morado con blanco.jpg']
      },
      {
        nombre: 'Roja/Blanco',
        codigo: '#ff0000',
        imagenes: ['/asset/img/Air max 90 roja blanco.jpg']
      },
      {
        nombre: 'Gris',
        codigo: '#858585',
        imagenes: ['/asset/img/Air max gris.jpeg']
      }
    ]
  },
  {
    id: 3,
    nombre: 'Jordan 4 Retro',
    precio: 180000,
    descripcion: 'Zapatillas Jordan 4 Retro de alta calidad y comodidad',
    tiempoEntrega: '5-7 días hábiles',
    colores: [
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: ['/asset/img/Jordan 3 negro blanco.jpeg']
      },
      {
        nombre: 'Dorado',
        codigo: '#bda312',
        imagenes: ['/asset/img/Jordan 3 dorado.jpeg']
      },
      {
        nombre: 'Gris',
        codigo: '#858585',
        imagenes: ['/asset/img/Jordan 3 gris.jpeg']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['/asset/img/Jordan Retro 4.jpeg']
      }
    ]
  },
  {
    id: 4,
    nombre: 'New Balance 550',
    precio: 170000,
    descripcion: 'Zapatillas deportivas New Balance 550 de alta calidad',
    tiempoEntrega: '5-7 días hábiles',
    colores: [
      {
        nombre: 'Morado',
        codigo: '#800080',
        imagenes: ['/asset/img/new balance 550 morado.jpg']
      },
      {
        nombre: 'Azul',
        codigo: '#2fc2fc',
        imagenes: ['/asset/img/new balance 550 azul.jpg']
      },
      {
        nombre: 'Rojo',
        codigo: '#FF0000',
        imagenes: ['/asset/img/new balance 550 rojo.jpg']
      }
    ]
  },
   {
    id: 5,
    nombre: 'Jordan Retro 1',
    precio: 195000,
    descripcion: 'Zapatillas Jordan Retro 1 originales de excelente calidad',
    tiempoEntrega: '5-7 días hábiles',
    colores: [
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['/asset/img/Jordan retro 1 negro.jpeg']
      },
      {
        nombre: 'Azul',
        codigo: '#1e3a8a',
        imagenes: ['/asset/img/Jordan retro 1 azul.jpeg']
      },
      {
        nombre: 'Verde',
        codigo: '#16a34a',
        imagenes: ['/asset/img/Jordan retro 1 verde.jpeg']
      }
    ]
  },
   {
    id: 6,
    nombre: 'Nike SB',
    precio: 150000,
    descripcion: 'Zapatillas Nike SB de edición especial y alta calidad',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Morado',
        codigo: '#800080',
        imagenes: ['/asset/img/nike sb morado.jpg']
      },
      {
        nombre: 'Azul',
        codigo: '#0000FF',
        imagenes: ['/asset/img/nike sb azul.jpg']
      }
    ]
  },
  {
    id: 7,
    nombre: 'Jordan 3 Retro',
    precio: 170000,
    descripcion: 'Zapatillas Jordan 3 Retro color beatch claro. Diseño clásico y elegante.',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Beatch claro',
        codigo: '#f5f5dc',
        imagenes: [
          'asset/img/Jordan Retro.jpeg',
          'asset/img/Jordan Retro derecha1.jpeg',
          'asset/img/Jordan Retro derecha.jpeg',
          'asset/img/Jordan Retro Atras.jpeg'
        ]
      }
    ]
  },
  {
    id: 8,
    nombre: 'Buzo Jordan',
    precio: 200000,
    descripcion: 'Buzo de alta calidad',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Rojo',
        codigo: '#f30000',
        imagenes: ['asset/img/Buzo Jordan rojo.jpeg']
      },
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: ['asset/img/Buzo Jordan blanco.jpeg']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/Buzo Jordan negro.jpeg']
      },
      {
        nombre: 'Negro Azul',
        codigo: '#002fff',
        imagenes: ['asset/img/jordan negro azul.jpg']
      }
    ]
  },
  {
    id: 9,
    nombre: 'Lv Stake',
    precio: 200000,
    descripcion: 'Da un paso adelante con estos tenis, donde la estética urbana se encuentra con la comodidad total. Perfectos para quienes buscan un look audaz y un movimiento sin límites.',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'gris',
        codigo: '#5d5e62',
        imagenes: ['asset/img/Lv gris nueva.jpeg']
      },
      {
        nombre: 'Azul',
        codigo: '#0231aa',
        imagenes: ['asset/img/Lv Stake 2.jpeg']
      },
      {
        nombre: 'Rojo',
        codigo: '#FF0000',
        imagenes: ['asset/img/Lv Stake 3.jpeg']
      },
      {
        nombre: 'Cafe',
        codigo: '#aba04297',
        imagenes: ['asset/img/Lv Stake 5.jpeg']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/Lv Stake 1.jpeg']
      }
    ]
  },
  {
    id: 10,
    nombre: 'For One',
    precio: 190000,
    descripcion: 'Estos tenis no son solo un calzado, son una declaración de estilo.Con un diseño fresco y detalles que marcan tendencia',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: [
          '/asset/img/for one ultima.jpeg'
        ]
      },
      {
        nombre: 'Blanco',
        codigo: '#FFFFFF',
        imagenes: [
          '/asset/img/for one  (1).jpeg'
        ]
      },
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: [
          '/asset/img/for one  (2).jpeg'
        ]
      },
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: [
          '/asset/img/fooooor one.jpeg'
        ]
      },
    ]
  },


  ];

  getProductoPorId(id: number): ProductoZapato | undefined {
    return this.productos.find(p => p.id === id);
  }
}
