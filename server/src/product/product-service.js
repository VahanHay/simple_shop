

import {ProductCartRepository} from "../productCart/productCart-repazitory.js";
import {ProductRepository} from "./product-repazitory.js"


class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
        this.productCartRepository = new ProductCartRepository();
    }

      async addToCart(payload) {
        const { id, userId, quantity } = payload;

        if (!userId || !quantity || !id) {
            throw new Error('Invalid payload.');
        }

        const product = await this.productRepository.getById(id);

        if (product.count - quantity < 0) {
            throw new Error(`Only ${product.count} items available`);
        }

       const basket  = await this.productCartRepository.create({
        product_id: product.id,
        user_id: userId,
        quantity,
       });
        return basket;
    }

      async getAll(){
          try{
              return this.productRepository.getAll();
          }catch (error){
              console.error(error);
              throw new Error('Error getting users')
          }
    };

      async create(payload){
        const { name, description, price, count } = payload;

        if (!name || !description || !price || !count || ( +count ) < 1) {
            throw new Error('Invalid payload.');
        }

        try{

            payload.price = +payload.price;
            payload.count = +payload.count;

            return this.productRepository.create(payload);
        }catch(error){
            console.error(error);
            throw new Error('Error creating user in DB');
        }
      };

      async getById(Id){
          try{
              return this.productRepository.getById(Id);
          }catch (error){
              console.error(error);
              throw new Error('Can Not Get Product');
          }
      };

    // async getByCategory(categoryId) {
    //     try {
    //         return await this.productRepository.getByCategory(categoryId);
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error('Error getting products by category');
    //     }
    // }
}

export { ProductService }

