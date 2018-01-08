// class Product{

//     private id:number;

//     private name:string;

//     private category: string;

//     private description: string;

//     private price: number;

//     constructor(id?:number, name?:string, category?:string, description?:string, price?:number){
//         this.id=id;
//         this.name=name;
//         this.category=category;
//         this.description=description;
//         this.price=price;
//     }

//     getID() : number{
//         return this.id;
//     }

//     private setID(id:number) :void{
//         this.id=id;
//     }

//     getName() : string{
//         return this.name;
//     }

//     private setName(name:string) :void{
//         this.name=name;
//     }

//     getCategory() : string{
//         return this.category;
//     }

//     private setCategory(category:string) :void{
//         this.category=category;
//     }

//     getDescription() : string{
//         return this.description;
//     }

//     private setDescription(description:string) :void{
//         this.description=description;
//     }

//     getPrice() : number{
//         return this.price;
//     }

//     private setPrice(price:number) :void{
//         this.price=price;
//     }

// }

class Product{

    constructor(public id?: number,
        public name?: string,
        public category?:string,
        public description?:string,
        public price?:number){}
}

interface IProductRepository{
    addProduct(product: Product):void;
    updateProduct(updatedProduct: Product):void;
    deleteProduct(pid: number):void;
    getProductById(pid: number):Product;
    getProducts():Array<Product>;

}

class ProductRepository implements IProductRepository{
    private products: Array<Product>;

    constructor(){
        this.products=new Array<Product>();
    }

    addProduct(product:Product):void{
        product.id=this.products.length+1;
        this.products.push(product);
    }

    updateProduct(updatedProduct:Product):void{
        let index :number = this.products.findIndex((product) =>{
            return product.id == updatedProduct.id;
        })

        this.products.splice(index,1,updatedProduct);
    }

    deleteProduct(pid:number):void{
        let index : number=this.products.findIndex((product)=>{
            return product.id==pid;
        })
        this.products.splice(index,1);
    }

    getProductById(pid:number):Product{
        let product: Product = this.products.find((product) =>{
            return product.id==pid;
        })
        return product;
    }

    getProducts():Array<Product>{
        return this.products;
    }
}

let repo:ProductRepository = new ProductRepository();
repo.addProduct(new Product(0,"LG", "Mobile", "Smart Phone", 21234));
repo.addProduct(new Product(0,"VIVO", "Mobile", "Smart Phone", 12345));
repo.addProduct(new Product(0,"Samsung", "Mobile", "Smart Phone", 45678));

console.log(JSON.stringify(repo.getProducts()));

let pro:Product=repo.getProductById(2);
pro.price=6789;
repo.updateProduct(pro);

console.log(JSON.stringify(repo.getProductById(1)));

repo.deleteProduct(3);

console.log(JSON.stringify(repo.getProducts()));
