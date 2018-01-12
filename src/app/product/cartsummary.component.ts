import { CartService } from '../model/cart.service';
import { Component } from '@angular/core';

@Component({
    selector : 'app-cartsummary',
    templateUrl : 'cartsummary.component.html'
})
export class CartSummaryComponent {
    constructor(public cart: CartService){ }

}