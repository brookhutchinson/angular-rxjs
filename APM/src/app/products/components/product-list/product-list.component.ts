// components
import { ChangeDetectionStrategy, Component } from '@angular/core';

// services
import { ProductService }                             from './../../../services/product.service';

// rxjs
import { EMPTY }                                      from 'rxjs';
import { catchError }                                 from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$ = this.productService.products$
    .pipe(
      // catch error
      catchError((err) => {
        // set error message
        this.errorMessage = err;
        return EMPTY;
      })
    );

  constructor(private productService: ProductService) {}

  onAdd() {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string) {
    console.log('Not yet implemented');
  }
}
