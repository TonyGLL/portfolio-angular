import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  filterProduct: Product[] = [];

  constructor( private http: HttpClient ) {

    this.loadProducts();
  }

  private loadProducts() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-a7dde.firebaseio.com/products_idx.json')
          .subscribe((resp: Product[]) => {

            this.products = resp;
            this.loading = false;
            resolve();
          });
    });

  }

  getProduct(id: string) {

    return this.http.get(`https://angular-html-a7dde.firebaseio.com/products/${id}.json`);
  }

  searchProduct(term: string) {

    if (this.products.length === 0) {

      // Load Products
      this.loadProducts().then(() => {

        // Run after having the products
        // Apply Filter
        this.productsFilter(term);
      });
    }else{

      // Apply Filter
      this.productsFilter(term);
      // this.filterProduct = this.products.filter(product => {

      //   return true;
      // });

    }
  }

  private productsFilter(term: string) {

    console.log(this.filterProduct);
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
