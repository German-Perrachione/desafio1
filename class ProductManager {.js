class ProductManager {

  constructor() {

    this.products = [];

  }

  

  addProduct(product) {

    if (products.filter(p => p.code === product.code).length > 0) return "Mensaje de error"

    // product.id = randomNumber() //Funcion a implementar con id autoincremental VALIDAR!

    ProductManager.products.push(product);

  }

  getProducts() {

    return this.products

  }

  getProductById(id) {

    const productById = this.products.filter(p => p.id === id) //Que hacemos con esto? Validar el retorno del metodo

}

}

  }

}