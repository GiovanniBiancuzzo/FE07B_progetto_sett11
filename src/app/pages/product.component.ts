import { Component, Input, Output, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  template: `
    <h1 class="text-align-center">Dettagli prodotto</h1>
    <div class="container">
      <app-card [product]="item">
        </app-card>
      <button (click)="addToCart()" class="btn btn-primary me-2">Acquista</button>
      <button [routerLink]="['/']" class="btn btn-primary">Torna alla home</button>
      <!-- <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h3 class="card-title">{{ product.name }}</h3>
                  <h5>{{ product.price | currency : 'EUR'}}</h5>
                  <p class="card-text">
                    {{ product.description }}
                  </p>
                </div>
          </div> -->
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
        this.id = +params.get('id');
        console.log(this.id);
        this.prdSrv.getProduct(this.id).subscribe(product => {
          this.product = product;
          console.log(product);
        })

        //this.prdSrv.getProducts().subscribe(products => {
        //  this.products = products;
        //  console.log(products);
    })

  }

  addToCart() {
    this.cartSrv.addProduct(this.product as Product);
    setTimeout(() => {
      this.router.navigate(['/']);
      //manda indietro alla home un secondo, dopo l'agggiunta al carrello
    }, 1000);

  }
}
