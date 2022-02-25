import { Injectable } from '@angular/core';
import { Products } from './models/products';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList: Products[] = [];//array carrello
  cart: Number = 0;//variabile per incrementare il numero del carrello
  constructor() { }

  addToCart(product: Products) {
    this.cartList = [...this.cartList, product];
    //this.cart = this.cart + 1;
  }

  clearCart() {//svuota il carrello
    this.cartList = [];
    this.cart = 0;
  }
}
