import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ProductComponent } from './product/product.component';
import { CartDetailsComponent } from './product/cartdetails.component';
import { CheckoutComponent } from './product/checkout.component';
import { ProductRouteGuard } from './guard/product.guard';
import {AdminModule} from './admin/admin.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ProductModule, 
    RouterModule.forRoot(
      [
        {
          path: 'product', 
          component: ProductComponent,
          canActivate:[
            ProductRouteGuard
          ]
        },
        {
          path: 'cart', 
          component: CartDetailsComponent,
          canActivate:[
            ProductRouteGuard
          ]
        },
        {
          path: 'checkout',
          component: CheckoutComponent,
          canActivate:[
            ProductRouteGuard
          ]
        },
        {
          path: 'admin',
          loadChildren: 'app/admin/admin.module#AdminModule',
          // loadChildren:() => AdminModule,
          canActivate:[
            ProductRouteGuard
          ]
        },
        {
          path: '**',
          redirectTo: '/product'
        }
      ]
    )
  ],
  providers: [ProductRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
 