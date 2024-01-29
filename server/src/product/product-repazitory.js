
import { getRepository } from 'typeorm';
import { ProductSchema } from '../models/product-model.js';


class ProductRepository {
    constructor() {
        this.productRepository = getRepository(ProductSchema)
    }

    getById(id) {
        return this.productRepository.findOne({ where: { id } });
    }

    async getAll() {
       try{
           return this.productRepository.find();
       }catch (error){
           console.error(error);
           throw new Error('Failing to get AllUsers from DB');//Make UserError Class in Error folder
       }
    };////+

    async create(payload){
        try{

            //return this.productRepository.save(payload);

            const { categories, ...productData } = payload;

            const product = this.productRepository.create(productData);
            await this.productRepository.save(product);
            if (categories && categories.length > 0) {
                await this.productRepository
                    .createQueryBuilder()
                    .relation(ProductSchema, 'categories')
                    .of(product)
                    .add(categories);
            }

            return product;
        }catch (error) {
            console.error(error);
            throw new Error('Error creating user in DB');
        }
    };////+

    async getByCategory(categoryId) {
        try {
            const products = await this.productRepository.find({where:{product}})
            // return this.productRepository.createQueryBuilder('product')
            //     .innerJoin('product.categories', 'category', 'category.id = :categoryId', { categoryId })
            //     .getMany();
        } catch (error) {
            console.error(error);
            throw new Error('Ошибка при получении продуктов по категории из базы данных');
        }
    }
}

  export { ProductRepository };


// async getByCategory(categoryId) {
//     try {
//         return this.productRepository.createQueryBuilder('product')
//             .innerJoin('product.categories', 'category', 'category.id = :categoryId', { categoryId })
//             .getMany();
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error getting products by category from DB');
//     }
// }