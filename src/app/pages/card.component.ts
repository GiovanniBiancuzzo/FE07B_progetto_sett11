import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  template: `

    <div class="card" style="width: 18rem;">
      <div *ngFor="let product of products" class="card-body">
        <h3 class="card-title">{{product.name}}</h3>
        <h5>{{product.price}}</h5>
        <p class="card-text">
        {{product.description}}
        </p>
        <button (click)="addToCart()" class="btn btn-primary"></button>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent implements OnInit {

  products! : Products[];

  constructor(private prdSrv: ProductsService, private cartSrv: CartService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.prdSrv.getProduct(id).subscribe(products => {
			this.id = id;
      console.log(products);
    })

    this.route.params
  }

  //addToCart() {
//
  //}


}
