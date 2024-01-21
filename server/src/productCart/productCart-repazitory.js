
import { getRepository } from 'typeorm';
import { ProductCartSchema } from '../models/productCart-model.js';


class ProductCartRepository {
    constructor() {
        // this.productCartRepository = {}
        this.userRepository = getRepository(ProductCartSchema);

    }

    getById(id) {
        return this.productCartRepository.findOne({ where: { id } });
    }

    async getAll() {
       try{
           return this.productCartRepository.find();
       }catch (error){
           console.error(error);
           throw new Error('Failing to get AllUsers from DB');//Make UserError Class in Error folder
       }
    }

    async create(payload){
        try{
            return this.productCartRepository.save(payload);
        }catch (error) {
            console.error(error);
            throw new Error('Error creating user in DB');
        }
    }
}

  export { ProductCartRepository };