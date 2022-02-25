import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  template: `
    <div class="container">
      <p *ngIf="!products">Non ci sono prodotti, torna più tardi.</p>
      <div class="card" style="width: 18rem;">
        <div *ngFor="let product of products" class="card-body">
          <h3 class="card-title">{{product.name}}</h3>
          <p class="card-text">
          {{product.description}}
          </p>
          <a [routerLink]="['/products',product.id]" class="card-link">Dettagli</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  @Input() products: Products[] | undefined;

  constructor(private prdSrv: ProductsService) { }

  ngOnInit(): void {
      this.prdSrv.getProducts().subscribe(products => {
			this.products = products;
      console.log(products);
    })
  }




}
