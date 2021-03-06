import { Component, Input, Output, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({//volevo stampare, come nella home, il singolo elemento attraverso il component card
  template: `
    <h1 class="text-align-center">Dettagli prodotto</h1>
    <div class="container">
      <app-card [product]="item">
        </app-card>
      <button (click)="addToCart()" class="btn btn-primary me-2">Acquista</button>
      <button [routerLink]="['/']" class="btn btn-primary">Torna alla home</button>
    </div>
  `,
  styles: [],
})
export class ProductComponent implements OnInit {

  //product!: Product[];
  id!: Number;
  item! : Product;
  product: Product | undefined;

  constructor(
    private prdSrv: ProductsService,
    private cartSrv: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.id = +params.get('id');//ottenimento dell'id
        console.log(this.id);
        this.prdSrv.getProduct(this.id).subscribe(product => {//stampa del singolo elemento
          this.product = product;
          console.log(product);
        })
    })

  }

  addToCart() {
    this.cartSrv.addProduct(this.product as Product);
    setTimeout(() => {
      this.router.navigate(['/']);
      //manda indietro alla home due secondi dopo l'agggiunta al carrello
    }, 2000);

  }
}
