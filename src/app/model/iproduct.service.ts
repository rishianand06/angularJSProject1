import {Product} from './product'
import { Observable } from 'rxjs/Observable';

export interface IProductService{

    addProduct(product: Product):Observable<number>;

    updateProduct(updatedProduct: Product):Observable<number>;

    deleteProduct(pid: number):Observable<number>;

    getProductById(pid: number):Product;

    getProducts(category?:string):Array<Product>;

    getCategories():Array<String>;
}