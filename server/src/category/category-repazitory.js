import { getRepository } from "typeorm";

import { CategorySchema } from '../models/category-model .js';

class CategoryRepazitory {

    constructor() {
        this.categoryRepository = getRepository(CategorySchema);
    }
    async getAllCategories(){
         try{
             const categorys = await this.categoryRepository.find();
             return categorys;
         }catch (error){
             console.error(error);
             throw new Error('Failed to get all categories from DB');
         }
    };

    async getCategoryById(categoryId){
        try{

        }catch (error){
            console.error(error);
        }
    }

}

export { CategoryRepazitory }