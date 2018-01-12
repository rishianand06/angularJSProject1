import { CartItem } from "./cart.service";


export class Order{
    
    public items: Array<CartItem> = [];

    constructor(
        public name?: string,
        public address?:string,
        public mobileno?: number
    ){}
}