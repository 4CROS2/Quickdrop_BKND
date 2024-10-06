class GetProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute() {
        return await this.productRepository.getAll();
    }
}

export default GetProducts;
