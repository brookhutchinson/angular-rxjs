// angular modules
import { NgModule }                from '@angular/core';
import { RouterModule }            from '@angular/router';
import { ReactiveFormsModule }     from '@angular/forms';

// components
import { ProductListAltComponent } from './components/product-list-alt/product-list-alt.component';
import { ProductDetailComponent }  from './components/product-detail/product-detail.component';
import { ProductListComponent }    from './components/product-list/product-list.component';
import { ProductShellComponent }   from './components/product-shell/product-shell.component';

// shared modules
import { SharedModule }            from './../shared/shared.module';

@NgModule({
  imports: [
    // angular modules
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: ':alternate', component: ProductShellComponent }
    ]),
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    ProductListAltComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductShellComponent
  ]
})
export class ProductModule {}
