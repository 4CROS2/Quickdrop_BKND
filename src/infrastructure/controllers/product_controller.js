import AddProduct from '../../app/useCase/add_product_use_case.js';
import GetProducts from '../../app/useCase/get_all_products_use_case.js';
import IProductRepository from '../repositories/product_repository_impl.js';

const addProductController = async (req, res) => {
    const product_repository = new IProductRepository();
    const addProduct = new AddProduct(product_repository);

    try {
        const product = await addProduct.execute(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    const product_repository = new IProductRepository();
    const getProducts = new GetProducts(product_repository);

    try {
        const products = await getProducts.execute();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export { addProductController, getAllProducts };
