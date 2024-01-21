

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

       await this.productCartRepository.create({
        product_id: product.id,
        user_id: userId,
        quantity,
       });
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

        if (!name || !description || !price || !count) {
            throw new Error('Invalid payload.');
        }

        try{
            return this.productRepository.create(payload);
        }catch(error){
            console.error(error);
            throw new Error('Error creating user in DB');
        }
      };

}

export { ProductService }

