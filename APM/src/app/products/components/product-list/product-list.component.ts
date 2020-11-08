// components
import { Component, OnInit } from '@angular/core';

// services
import { ProductService }    from './../../../services/product.service';

// interfaces
import { Product }           from './../../../interfaces/product';

// rxjs
import { Observable }        from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // retrive products
    this.products$ = this.productService.getProducts();
  }

  onAdd() {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string) {
    console.log('Not yet implemented');
  }
}
