import { getRepository } from "typeorm";

import { CategorySchema } from '../models/category-model .js';

class CategoryRepazitory {

    constructor() {
        this.categoryRepository = getRepository(CategorySchema);
    }
    async getAll(){
         try{
             return await this.categoryRepository.find();

         }catch (error){
             console.error(error);
             throw new Error('Failed to get all categories from DB');
         }
    };

    async getById(id){
        try{
            return this.categoryRepository.findOne({where:{id}})
        }catch (error){
            console.error(error);
        }
    };

    async create(data){
        try{
            return this.categoryRepository.save(data);
        }catch (error){
            console.error(error);
        }
    }

}

export { CategoryRepazitory }