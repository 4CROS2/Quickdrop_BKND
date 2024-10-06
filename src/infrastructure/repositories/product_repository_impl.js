import Products from '../../domain/entities/products.js';
import ProductRepository from '../../domain/repositories/product_repository.js';
import supabase from '../database/supabaseClient.js';

class IProductRepository extends ProductRepository {
    async add(product) {
        const { data, error } = await supabase.from('products').insert([
            {
                name: product.name,
                description: product.description,
                price: product.price,
                seller_id: product.seller_id,
                images: product.images,
            },
        ]);
        if (error) {
            throw new Error(error.message);
        }

        const productData = data[0];
        return new Products(
            productData.id,
            productData.name,
            productData.description,
            productData.price,
            productData.seller_id,
            productData.images
        );
    }
    async getAll() {
        const { data, error } = await supabase.from('product').select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data.map(
            (product) =>
                new Products(
                    product.id,
                    product.name,
                    product.description,
                    product.price,
                    product.seller_id,
                    product.images
                )
        );
    }
}

export default IProductRepository;
