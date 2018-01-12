import { Component } from "@angular/core";
import { CartService } from "../model/cart.service";

@Component({
    selector: 'app-cartdetails',
    templateUrl: 'cartdetails.component.html'
})
export class CartDetailsComponent{
 constructor(public cart: CartService){}
}