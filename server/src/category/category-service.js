import { CategoryRepazitory } from "./category-repazitory.js";

class CategoryService {

    constructor() {
        this.categoryRepazitory = new CategoryRepazitory()
    }
    async getAll(){
        try{

             const categorys = await this.categoryRepazitory.getAll();
             return categorys;
        }catch (error){
            console.error(error);
            throw new Error('Error updating category in DB');
        }
    };

    async getById(id){
        try{
            return this.categoryRepazitory.getById(id);
        }catch (error){
            console.error(error);
        }
    };

    async create(data){
        try{
            if(!data.name){
                throw new Error('Missing Data')
            }
            return this.categoryRepazitory.create(data);
        }catch (error){
            console.error(error);
            throw new Error('Error creating category in DB');
        }
    }


}

export { CategoryService }