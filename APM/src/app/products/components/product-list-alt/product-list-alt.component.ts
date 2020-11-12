// components
import { Component }      from '@angular/core';

// services
import { ProductService } from './../../../services/product.service';

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
