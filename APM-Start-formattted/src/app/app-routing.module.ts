// angular modules
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';

// components
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent }      from './home/welcome.component';

@NgModule({
  // imports
  imports: [
    RouterModule.forRoot([
      // welcome route
      { path: 'welcome', component: WelcomeComponent },
      // products route
      { path: 'products', loadChildren: () => import('./products/product.module').then(m => m.ProductModule) },
      // redirect to welcome route
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // page not found route
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
