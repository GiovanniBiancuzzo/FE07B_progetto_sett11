import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  template: `
    <div class="container">
      <p *ngIf="!products">Non ci sono prodotti, torna più tardi.</p>
      <app-card [product]="item" *ngFor="let item of products" >
        </app-card>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private prdSrv: ProductsService) { }

  ngOnInit(): void {
      this.prdSrv.getProducts().subscribe(products => {//stampa, al loading della pagina, i prodotti
			this.products = products;
      console.log(products);
    })
  }
}
