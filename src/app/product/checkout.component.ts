import { Component } from "@angular/core";
import { Order } from "../model/order";
import { OrderService } from "../model/order.service";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent{

    constructor(private orderservice:OrderService){};

    public order:Order = new Order();

    public orderSent:boolean = true;

    public submitOrder():void{
        this.orderservice.submitOrder(this.order);
        this.orderSent = false;
    }

}