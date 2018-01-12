import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";
import { Order } from "./order";
import {Http, Headers, RequestOptions, Response } from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class OrderRestService{

    private baseUrl:string = "http://localhost:3500/orders";
    constructor(private http: Http,
        private cartservice: CartService){}

    public submitOrder(order:Order){

        order.items = this.cartservice.cartItems;

        let customheader: Headers = new Headers({
            "Content-Type": "application/json"
        })

        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheader
        });

        let observer: Observable<Response> =this.http.post(this.baseUrl, order, requestOptions);

        observer.subscribe((response) =>{
            if(response.status == 201){
                console.log(response.json());
                this.cartservice.clear();
            }
        });
    }

}