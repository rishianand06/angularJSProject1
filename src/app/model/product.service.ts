import {IProductService} from './iproduct.service'
import {Product} from './product'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService implements IProductService{
    private products: Array<Product>;

    constructor(){
        this.products=new Array<Product>();

        this.addProduct(new Product(0,"Product1", "Category1", "Product1(Category1)",1000));
        this.addProduct(new Product(0,"Product2", "Category1", "Product2(Category1)",1100));
        this.addProduct(new Product(0,"Product3", "Category1", "Product3(Category1)",1200));
        this.addProduct(new Product(0,"Product4", "Category1", "Product4(Category1)",1300));
        this.addProduct(new Product(0,"Product5", "Category1", "Product5(Category1)",1400));
        this.addProduct(new Product(0,"Product6", "Category2", "Product6(Category2)",1500));
        this.addProduct(new Product(0,"Product7", "Category2", "Product7(Category2)",1600));
        this.addProduct(new Product(0,"Product8", "Category2", "Product8(Category2)",1700));
        this.addProduct(new Product(0,"Product9", "Category2", "Product9(Category2)",1800));
        this.addProduct(new Product(0,"Product10", "Category2", "Product10(Category2)",1900));
        this.addProduct(new Product(0,"Product11", "Category3", "Product11(Category3)",2000));
        this.addProduct(new Product(0,"Product12", "Category3", "Product12(Category3)",2100));
        this.addProduct(new Product(0,"Product13", "Category3", "Product13(Category3)",2200));
        this.addProduct(new Product(0,"Product14", "Category3", "Product14(Category3)",2300));
        this.addProduct(new Product(0,"Product15", "Category3", "Product15(Category3)",2400));
    }

    addProduct(product:Product):Observable<number>{
        product.id=this.products.length+1;
        this.products.push(product);
        return Observable.create(201);
    }

    updateProduct(updatedProduct:Product):Observable<number>{
        let index :number = this.products.findIndex((product) =>{
            return product.id == updatedProduct.id;
        })

        this.products.splice(index,1,updatedProduct);
        return Observable.create(200);
    }

    deleteProduct(pid:number):Observable<number>{
        let index : number=this.products.findIndex((product)=>{
            return product.id==pid;
        })
        this.products.splice(index,1);
        return Observable.create(200);
    }

    getProductById(pid:number):Product{
        let product: Product = this.products.find((product) =>{
            return product.id==pid;
        })
        return product;
    }

    getProducts(category:string = null):Array<Product>{

        return this.products.filter((product) => (category == null || product.category == category));
        // return this.products;
    }

    getCategories():Array<string>{
        let categories= this.products.map((product)=>product.category)
            .filter((cat,index,arr)=>arr.indexOf(cat) ==index)
            .sort();
        return categories;
    }
}