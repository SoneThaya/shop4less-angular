import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody) {
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.post(productUrl, productBody); // return an observable
  }

  viewProduct(productId) {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.get(productUrl); // return an observable
  }

  updateProduct(productId, productBody) {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.put(productUrl, productBody); // return an observable
  }

  deleteProduct(productId) {
    const productUrl = 'http://localhost:3000/product/' + productId;

    return this.httpClient.delete(productUrl); // return an observable
  }

  searchCategoryProducts(categoryId) {
    const productUrl = 'http://localhost:3000/product/category=' + categoryId;

    return this.httpClient.get(productUrl); // return an observable
  }

  searchDateProducts(dateParam) {
    const productUrl = 'http://localhost:3000/product/date=' + dateParam;

    return this.httpClient.get(productUrl); // return an observable
  }
}
