import { Component, Inject } from "@angular/core";
import { IProductService } from "../model/iproduct.service";
import { Product } from "../model/product";
import { ProductService } from "../model/product.service";
import { CartService } from "../model/cart.service";
import {Router} from '@angular/router'

@Component({
    selector: 'app-productlist',
    templateUrl: 'product.component.html'
})
export class ProductComponent{

    private selectedCategory:string;

    constructor(
        @Inject('IProductService') private productService : ProductService,
        private cartService : CartService,
        private router :Router){ }

    public get products():Array<Product>{
        return this.productService.getProducts(this.selectedCategory);
    }

    public get categories():Array<String>{
        return this.productService.getCategories();
    }

    public changeCategory(newCategory?:string){
        return this.selectedCategory=newCategory;
    }

    public addProductToCart(product: Product):void{
        this.cartService.addItem(product);
        this.router.navigateByUrl("/cart");
    }
}