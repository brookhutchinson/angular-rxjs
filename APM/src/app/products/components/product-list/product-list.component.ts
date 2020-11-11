// components
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// services
import { ProductService }                             from './../../../services/product.service';

// interfaces
import { Product }                                    from './../../../interfaces/product';

// rxjs
import { Observable }                                 from 'rxjs';
import { EMPTY }                                      from 'rxjs';
import { catchError }                                 from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // retrive products
    this.products$ = this.productService.getProducts()
      .pipe(
        catchError((err) => {
          // set error message
          this.errorMessage = err;

          // return empty observable
          return EMPTY;
        })
      );
  }

  onAdd() {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string) {
    console.log('Not yet implemented');
  }
}
