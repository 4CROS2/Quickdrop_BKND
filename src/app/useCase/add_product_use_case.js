const Products = require('../../domain/entities/products')

class AddProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productData) {
        const product = new Products(
            null,
            productData.name,
            productData.description,
            productData.price,
            productData.sellerId
        );
        return await this.productRepository.add(product);
    }
}

module.exports = AddProduct;
