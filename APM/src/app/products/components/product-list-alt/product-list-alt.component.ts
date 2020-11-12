// components
import { Component }      from '@angular/core';

// services
import { ProductService } from './../../../services/product.service';

// interfaces
import { Product }        from './../../../interfaces/product';

// rxjs
import { Subscription }   from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;

  products$ = this.productService.products$;

  constructor(private productService: ProductService) {}

  onSelected(productId: number) {
    console.log('Not yet implemented');
  }
}
