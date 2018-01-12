import { Product } from './product';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService{

    public cartItems: Array<CartItem>;

    public itemCount: number = 0;
    public totalPrice : number = 0;

    constructor(){
        this.cartItems = new Array<CartItem>();
    }

    public addItem(product : Product, quantity: number=1):void{

        let cardItem = this.cartItems.find((item)=>item.product.id == product.id);
        if(cardItem != undefined){
            cardItem.quantity = Number(quantity) ;
            if(quantity <= 0){
                this.removeItem(product.id);
            }
        }
        else{
            this.cartItems.push(new CartItem(product, quantity));
        }
        this.reCalculate();
    }

    public removeItem(pid:number): void{
        let index = this.cartItems.findIndex((item) => item.product.id == pid);
        this.cartItems.splice(index,1);
        this.reCalculate();
    }

    public clear(): void{
        this.itemCount = 0;
        this.totalPrice = 0;
        this.cartItems = [];
    }

    private reCalculate(): void{
        this.itemCount = 0;
        this.totalPrice = 0;

        this.cartItems.forEach((item) =>{
            this.itemCount += item.quantity;
            this.totalPrice += item.subTotal;
        })
    }
}

export class CartItem{
    constructor (public product: Product, public quantity: number){ }

    public get subTotal() {
        return this.product.price * this.quantity;
    }
}