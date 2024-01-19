import { CategoryRepazitory } from "./category-repazitory.js";

class CategoryService {

    // constructor() {
    //     this.categoryRepazitory = new CategoryRepazitory()
    // }
    async getAllCategories(){
        try{
             const categoryRepazitory = new CategoryRepazitory();
             const categorys = await categoryRepazitory.getAllCategories();
             return categorys;
        }catch (error){
            console.error(error);
            throw new Error('Error updating category in DB');
        }
    };

    async getCategoryById(categoryId){
        try{

        }catch (error){
            console.error(error);
        }
    }
}

export { CategoryService }