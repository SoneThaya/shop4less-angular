import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  updateProduct(productId, productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.delete<Product>(productUrl); // return an observable
  }

  searchCategoryProducts(categoryId): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/category=' + categoryId;

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  searchDateProducts(dateParam): Observable<Product> {
    const productUrl = 'http://localhost:3000/product/date=' + dateParam;

    return this.httpClient.get<Product>(productUrl); // return an observable
  }
}
