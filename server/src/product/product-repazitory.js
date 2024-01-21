
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
    }

    async create(payload){
        try{
            return this.productRepository.save(payload);
        }catch (error) {
            console.error(error);
            throw new Error('Error creating user in DB');
        }
    }
}

  export { ProductRepository };