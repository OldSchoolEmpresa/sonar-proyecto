import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() { }

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(
      cartItem => cartItem.id === item.id && 
                 cartItem.color === item.color && 
                 cartItem.talla === item.talla
    );

    if (existingItem) {
      existingItem.cantidad = item.cantidad;
    } else {
      this.cartItems.push({...item});
    }
    this.saveCart();
  }

  removeFromCart(itemId: number, color: string, talla: string): void {
    this.cartItems = this.cartItems.filter(
      item => !(item.id === itemId && 
              item.color === color && 
              item.talla === talla)
    );
    this.saveCart();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCart();
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + (item.precio * item.cantidad), 0
    );
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  loadCart(): void {
    const cart = localStorage.getItem('cart');
    this.cartItems = cart ? JSON.parse(cart) : [];
  }
}

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  color: string;
  talla: string;
  cantidad: number;
  imagen: string;
}