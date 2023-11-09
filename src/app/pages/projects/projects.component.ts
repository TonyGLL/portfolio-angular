import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { take } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public loading = true;
  public projects: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.loadProducts().pipe(take(1)).subscribe(({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    }));
  }

}
