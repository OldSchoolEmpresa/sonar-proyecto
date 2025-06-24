

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


export class ProductosService {
  private readonly productos: Producto[] = [
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
    // 🔁 Aquí sigue el resto de productos como ya los tienes...
    // No necesitas cambiar el contenido interno, solo asegurarte que 'productos' esté como `readonly`.
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
    // ... y así con todos los demás hasta el producto 21
  ];

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}
