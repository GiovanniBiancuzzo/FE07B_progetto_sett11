import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart.component';
import { HomeComponent } from './pages/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './pages/card.component';
import { NotFoundComponent } from './pages/not-found.component';
import { ProductComponent } from './pages/product.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products/:id',
    component: CardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
		path: '**',
		component: NotFoundComponent
	}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    NotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
