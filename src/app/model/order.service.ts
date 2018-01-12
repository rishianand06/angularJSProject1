import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "./order";


@Injectable()
export class OrderService{

    constructor(private cartservice: CartService){}

    public submitOrder(order:Order){
        console.log(JSON.stringify(order));
        console.log(JSON.stringify(this.cartservice.cartItems));
        this.cartservice.clear;
    }
}