import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/products';

@Component({
  template: `
    <div class="container">
      <h2>Articoli</h2>
      <ul>
        <li *ngFor="let item of cartList">{{item.name}} {{item.price}}</li>
      </ul>
      <h2>Completa ordine</h2>
      <form >
        <label for="name">Nome</label>
        <input type="text" id="name">
        <label for="address">Indirizzo</label>
        <input type="text" id="address">
        <button type="submit" class="btn btn-primary">Invia</button>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cartList! : Product[];

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {//al caricamento della pagina get del carrello
    this.cartList = this.cartSrv.getCart();
  }


}
