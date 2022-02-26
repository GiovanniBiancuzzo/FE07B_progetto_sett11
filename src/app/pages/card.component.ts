import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-card',
  template: `
    <div class="card m-3" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">{{product.name}}</h3>
        <h5>{{product.price | currency : 'EUR'}}</h5>
        <p class="card-text">
        {{product.description}}
        </p>
        <button [routerLink]="['/products',product.id]" class="btn btn-primary card-link">Dettagli</button>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent implements OnInit {

  @Input() product! : Product;

  constructor() {}

  ngOnInit(): void {}

}
