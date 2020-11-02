// angular modules
import { NgModule }              from '@angular/core';
import { AppRoutingModule }      from './app-routing.module';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpClientModule }      from '@angular/common/http';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { AppData }               from './data/app-data';

// components
import { AppComponent }          from './app.component';
import { PageNotFoundComponent } from './home/components/page-not-found/page-not-found.component';
import { WelcomeComponent }      from './home/components/welcome/welcome.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AppRoutingModule
  ],
  // components
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
