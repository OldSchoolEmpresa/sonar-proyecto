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
  {
    id: 5,
    nombre: 'Buzo Boston',
    precio: 170000,
    descripcion: 'Buzo Boston estilo retro, perfecta para clima frío y outfits urbanos.',
    tiempoEntrega: '4-6 días hábiles',
    colores: [
      {
        nombre: 'Azul Aqua',
        codigo: '#2697ba',
        imagenes: ['asset/img/boston morado.jpeg']
      },
      {
        nombre: 'Verde Oliva',
        codigo: '#9fb45c',
        imagenes: ['asset/img/Boston verde.jpeg']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/Boston negro.jpeg']
      }
    ]
  },
  {
    id: 6,
    nombre: 'Chaqueta California',
    precio: 180000,
    descripcion: 'Chaqueta estilo vintage con diseño inspirado en California.',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Blanco',
        codigo: '#f5f5dc',
        imagenes: ['asset/img/chaqueta California Blanco.webp']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/chaqueta California negro.webp']
      },
      {
        nombre: 'Dorado',
        codigo: '#d49c00',
        imagenes: ['/asset/img/chaqueta California Cafe.webp']
      }
    ]
  },
  {
    id: 7,
    nombre: 'Chaqueta Chicago',
    precio: 190000,
    descripcion: 'Chaqueta deportiva con diseño inspirado en Chicago.',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['asset/img/chaqueta chicago negro.webp']
      },
      {
        nombre: 'Dorado',
        codigo: '#a07b17',
        imagenes: ['asset/img/chaqueta chicago beach.webp']
      },
      {
        nombre: 'Verde',
        codigo: '#0a793c',
        imagenes: ['asset/img/chaqueta chicago verde.webp']
      }
    ]
  },
  {
    id: 8,
    nombre: 'Beisbolera',
    precio: 180000,
    descripcion: 'Beisbolera de alta calidad con diseño moderno y ajuste perfecto',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Azul Claro',
        codigo: '#ADD8E6',
        imagenes: ['/asset/img/Beisbolera azul clarito.webp']
      },
      {
        nombre: 'Morado',
        codigo: '#800080',
        imagenes: ['/asset/img/Beisbolera Morado.webp']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['/asset/img/Beisbolera negro.webp']
      },
      {
        nombre: 'Rojo',
        codigo: '#FF0000',
        imagenes: ['/asset/img/Beisbolera Roja.webp']
      },
      {
        nombre: 'Verde',
        codigo: '#0a793c',
        imagenes: ['/asset/img/Beisbolera verde.webp']
      },
      {
        nombre: 'Azul Oscuro',
        codigo: '#00008B',
        imagenes: ['/asset/img/Beisbolera azul.webp']
      }
    ]
  },
  {
    id: 9,
    nombre: 'Chaqueta Lakers',
    precio: 240000,
    descripcion: 'Chaqueta oficial de los Lakers, con diseño retro y detalles bordados.',
    tiempoEntrega: '3-5 días hábiles',
    colores: [
      {
        nombre: 'Blanco',
        codigo: '#ffffff',
        imagenes: ['/asset/img/Lakers Blanco.jpeg']
      },
      {
        nombre: 'Amarillo',
        codigo: '#FDB927',
        imagenes: ['/asset/img/LAKERS AMARILLO.jpg']
      },
      {
        nombre: 'Morado',
        codigo: '#e100ff',
        imagenes: ['/asset/img/LAKERS MORADO.jpg']
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: ['/asset/img/LAKERS NEGRO.jpg']
      }
    ]
  },
   {
    id: 10,
    nombre: 'Chaqueta BetSport',
    precio: 170000,
    descripcion: 'Camiseta deportiva edición especial BetSport',
    tiempoEntrega: '2-4 días hábiles',
    colores: [
      {
        nombre: 'Gris',
        codigo: '#b8b9b4',
        imagenes: [
          'asset/img/chaqueta Bestsport gris.webp'
        ]
      },
      {
        nombre: 'Morado',
        codigo: '#5932a1',
        imagenes: [
          'asset/img/chaqueta Bestsport morado.webp'
        ]
      },
      {
        nombre: 'Negro',
        codigo: '#000000',
        imagenes: [
          'asset/img/chaqueta Bestsport negro.webp'
        ]
      }
    ]
  },
  {
    id: 11,
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
  },
  ];

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
