class ProductManager{

    static products= [];

    constructor(titulo, descripcion,precio,imagen,codigo,stock){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.codigo = codigo;
        this.stock = stock;
        this.#id = id;

    }

    addproduct(product){

    if (ProductManager.products.includes(product.id))
        return "codigo de producto repetido"
        ProductManager.products.push(product)


    }


    getProducts() {

        return this.products

  }


    getProductById(id) {

        const productById = this.products.filter(p => p.id === id)

  }

};

