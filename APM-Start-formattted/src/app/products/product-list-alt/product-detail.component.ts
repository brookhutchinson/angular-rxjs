// components
import { Component }      from '@angular/core';

// services
import { ProductService } from './../product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product;

  constructor(private productService: ProductService) {}
}
