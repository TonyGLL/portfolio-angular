import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  filterProduct: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://angular-html-a7dde.firebaseio.com/products_idx.json');
  }

  getProduct(id: string) {

    return this.http.get(`https://angular-html-a7dde.firebaseio.com/products/${id}.json`);
  }

  async searchProduct(term: string) {

    if (this.products.length === 0) {

      // Load Products
      await this.loadProducts();
      // Run after having the products
      // Apply Filter
      this.productsFilter(term);
    } else {

      // Apply Filter
      this.productsFilter(term);
      // this.filterProduct = this.products.filter(product => {

      //   return true;
      // });

    }
  }

  private productsFilter(term: string) {
    this.filterProduct = [];

    term = term.toLocaleLowerCase();

    this.products.forEach(prod => {

      const lowerTitle = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(term) >= 0 || lowerTitle.indexOf(term) >= 0) {

        this.filterProduct.push(prod);
      }
    });
  }
}
