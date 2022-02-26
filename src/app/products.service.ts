import { Injectable } from '@angular/core';
import { Product } from './models/products';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productsUrl: string = 'http://localhost:4201/products'; //posizione dei prodotti
  products: Product[] | undefined;

  constructor(private http: HttpClient) {}

  getProducts () {
    return this.http.get<Product[]>(this.productsUrl);//localizzazione prodotti
  }

  getProduct (id: Number) {
    return this.http.get<Product>(this.productsUrl + id);//localizzazione prodotto dall'id
  }

}
