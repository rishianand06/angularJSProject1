import { NgModule } from '@angular/core';
import {ProductService} from '../model/product.service'
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { ModelModule } from '../model/model.module';
import {CartSummaryComponent} from './cartsummary.component';
import {CheckoutComponent} from './checkout.component';
import {CartDetailsComponent} from './cartdetails.component'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

@NgModule({

    declarations: [ProductComponent, CartSummaryComponent, CheckoutComponent, CartDetailsComponent],
    imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
    exports:[ProductComponent,]
})
export class ProductModule{ }