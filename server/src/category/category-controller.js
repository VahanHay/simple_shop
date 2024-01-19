import { CategoryService } from "./category-service.js";

class CategoryController {
    async getAllCategories(req, res){
        try{
            const categoryService = new CategoryService()
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories)
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    };

    async getCategoryById(req, res){
        try{

        }catch (error){
            console.error(error);
        }
    }
}

export { CategoryController }