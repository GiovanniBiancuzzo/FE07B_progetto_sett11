import { Injectable } from '@angular/core';
import { Products } from './models/products';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productList: string = 'http://localhost:4201/products';
  products: Products[] | undefined;

  constructor(private http: HttpClient) {}

  getProducts () {
    return this.http.get<Products[]>(this.productList);
  }

  getProduct (id: Number) {
    return this.http.get<Products[]>(this.productList + id);
  }

}
