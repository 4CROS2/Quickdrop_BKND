import Products from '../../domain/entities/products.js';

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

export default AddProduct;
