import { Injectable, Input } from '@angular/core';
import { Product } from './models/products';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList: Product[] = [];//array carrello
  @Input() cartItems!: Number;//variabile per incrementare il numero del carrello
  constructor() { }

  getCart () {
    return this.cartList;
  }

  addProduct(product: Product) {
    this.cartList = [...this.cartList, product];
    this.cartItems = +this.cartItems + 1;
  }

  clearCart() {//svuota il carrello
    this.cartList = [];
    this.cartItems = 0;
  }
}
