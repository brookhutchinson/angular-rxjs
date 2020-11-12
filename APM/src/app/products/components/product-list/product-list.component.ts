// components
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  products$ = this.productService.products$;

  constructor(private productService: ProductService) {}

  onAdd() {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string) {
    console.log('Not yet implemented');
  }
}
