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
 {
      id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
