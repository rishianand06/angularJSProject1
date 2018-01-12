import {IProductService} from './iproduct.service'
import {Product} from './product'
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import {AuthService} from './auth.service'

@Injectable()
export class ProductRestService implements IProductService{

    private products: Array<Product>;

    private baseUrl :string = "http://localhost:3500/products";
    constructor(private http :Http,
                private authService:AuthService){
        this.products=new Array<Product>();
        this.asyncProducts();
        
    }
    
    private asyncProducts(): void{
        let customheader:Headers = new Headers({
            "Accept" : "application/json"
        });

        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheader
        });
        
        let observer: Observable<Response> = this.http.get(this.baseUrl,requestOptions);
        observer.subscribe(
            (response) =>{
                this.products = response.json();
            }
        )
    }

    addProduct(product:Product):Observable<number>{

        let customheaders: Headers = new Headers({
            "Content-Type": "application/json"
        });
        if(this.authService.token != null){
            customheaders.append("authorization", `Bearer<${this.authService.token}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheaders
        });

        return this.http.post(
            this.baseUrl,product,requestOptions)
             .map((response) => {
                 this.asyncProducts();      
                 return response.status;
             })
    }

    updateProduct(updatedProduct:Product):Observable<number>{
        
        let customheaders: Headers = new Headers({
            "Content-Type": "application/json"
        });
        if(this.authService.token != null){
            customheaders.append("authorization", `Bearer<${this.authService.token}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheaders
        });

        return this.http.put(
            this.baseUrl+"/"+ updatedProduct.id,updatedProduct,requestOptions)
             .map((response) => {  
                 this.asyncProducts();                            
                 return response.status;
             })
    }

    deleteProduct(pid:number):Observable<number>{
        let customheaders: Headers = new Headers({
            "Content-Type": "application/json"
        });
        if(this.authService.token != null){
            customheaders.append("authorization", `Bearer<${this.authService.token}>`)
        }
        let requestOptions: RequestOptions = new RequestOptions({
            headers: customheaders
        });

        return this.http.delete(
            this.baseUrl+"/"+ pid,requestOptions)
             .map((response) => {     
                this.asyncProducts();                            
                 return response.status;
             })
    }

    getProductById(pid:number):Product{
        let product: Product = this.products.find((product) =>{
            return product.id==pid;
        })
        return product;
    }

    getProducts(category:string = null):Array<Product>{
        
        return this.products.filter((product) => (category == null || product.category == category));
    }

    getCategories():Array<string>{
        let categories= this.products.map((product)=>product.category)
        .filter((cat,index,arr)=>arr.indexOf(cat) ==index)
        .sort();
        return categories;
    }
}