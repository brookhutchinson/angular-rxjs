// components
import { Component, OnInit, OnDestroy } from '@angular/core';

// services
import { ProductService }               from './../../services/product.service';

// interfaces
import { Product }                      from '../../interfaces/product';

// rxjs
import { Subscription }                 from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;

  products: Product[] = [];
  sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe(
      // next
      (products) => this.products = products,
      // error
      (error) => this.errorMessage = error
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelected(productId: number) {
    console.log('Not yet implemented');
  }
}
