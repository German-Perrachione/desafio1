
class Product{

    static id=0;

    constructor(titulo, descripcion,precio,imagen,codigo,stock){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.codigo = codigo;
        this.stock = stock;
        this.id = Product.id++;

}

};


    class ProductManager{

        constructor(){

        this.products = new Array()

}

    addProduct(product){

        if(this.products.some(p => p.codigo === product.codigo)) 
            return "Error: Código de producto repetido"
            this.products.push(product);

}

    getProducts() {

        return this.products

}


    getProductById(id) {

        const productById = this.products.filter(p => p.id === id)

}

};



let product = new Product();

console.log(product)
console.log(product.getProducts());
product.addProduct('cereales', 'cereales integrales', '300', 'No Img','455as',true );
console.log(product.getProductById());