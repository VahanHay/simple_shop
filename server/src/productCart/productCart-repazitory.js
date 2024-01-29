
import { getRepository } from 'typeorm';
import { ProductCartSchema } from '../models/productCart-model.js';


class ProductCartRepository {
    constructor() {
        // this.productCartRepository = {}
        this.productCartRepository = getRepository(ProductCartSchema);

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
            console.log(payload);

            const newProductCart = await this.productCartRepository.save(this.productCartRepository.create({
                user: payload.user_id,
                product: payload.product_id,
                quantity: payload.quantity,
            }));

            return newProductCart;
        }catch (error) {
            console.error(error);
            throw new Error('Error creating user in DB');
        }
    }

    getByIds(productCartIds) {
        return this.productCartRepository.find({
            where: { id: In(productCartIds) },
        });
    }
}

  export { ProductCartRepository };