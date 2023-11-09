import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from 'src/app/interfaces/product-description.interface';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  product: ProductDescription;
  id: string;
  private subs = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(takeUntil(this.subs)).subscribe(parameters => {
      this.productService.getProduct(parameters['id'])
        .subscribe((product: ProductDescription) => {

          this.id = parameters['id'];
          this.product = product;
        });
    });
  }

  ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
  }

}
