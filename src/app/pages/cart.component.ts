import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../models/products';



@Component({
  template: `
    <div class="container">
      <h2>Articoli</h2>
      <ul>
        <li *ngFor="let product of products">{{product.name}} {{product.price}}</li>
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

  products! : Products[];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

}
