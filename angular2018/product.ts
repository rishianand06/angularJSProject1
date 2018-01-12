class Product {

    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number) { }

}

interface IProductRepository {
    addProduct(product: Product): void;
    updateProduct(updateProduct: Product): void;
    deleteProduct(pid: number): void;
    getProductById(pid: number): Product;
    getProducts(category: string): Array<Product>;
    getCategories(): Array<String>;
}

class ProductRepository implements IProductRepository {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
    }

    addProduct(product: Product): void {
        product.id = this.products.length + 1;
        this.products.push(product);
    }
    updateProduct(updateProduct: Product): void {

        let index = this.products.findIndex((product) => {
            return product.id == updateProduct.id;
        });

        this.products.splice(index, 1, updateProduct);
    }

    deleteProduct(pid: number): void {

        let index: number = this.products.findIndex((product) => {
            return product.id == pid;
        });

        this.products.splice(index, 1);
    }

    getProductById(pid: number): Product {

        let product: Product = this.products.find((product) => {
            return product.id == pid;
        });
        return product;
    }

    getProducts(category: string = null): Array<Product> {
        return this.products.filter((product) => (category == null || product.category == category));
    }

    getCategories(): Array<String> {

        let categories = this.products.map((product) => product.category)
            .filter((cat, index, arr) => arr.indexOf(cat) == index)
            .sort();
        return categories;
    }
}


let repo: ProductRepository = new ProductRepository();
repo.addProduct(new Product(0, "LG", "Mobile", "Smart Phone", 21222));
repo.addProduct(new Product(0, "Vivo", "Mobile", "Smart Phone", 18222));
repo.addProduct(new Product(0, "Samsung", "Mobile2", "Smart Phone", 21000));

console.log(JSON.stringify(repo.getProducts()));

repo.updateProduct(new Product(2, "Vivo", "Mobile", "Smart Phone", 18244));

console.log(JSON.stringify(repo.getProducts()));

console.log(JSON.stringify(repo.getProductById(1)));

//repo.deleteProduct(1);

console.log(JSON.stringify(repo.getProducts("Mobile2")));

console.log(JSON.stringify(repo.getCategories()));

