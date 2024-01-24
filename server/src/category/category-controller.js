import { CategoryService } from "./category-service.js";

class CategoryController {

    constructor(){
        this.categoryService = new CategoryService()
    }
    async getAll(req, res){
        try{

            const categories = await this.categoryService.getAll();
            console.log(categories)
            res.status(200).json(categories)
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    };

    async getById(req, res){
        try{
             const id = +req.params.id;
            console.log(id)
             const category =  await this.categoryService.getById(id);
             res.status(200).json(category)
        }catch (error){
            console.error(error);
            res.status(400).json({message:'Bed Request'});
        }
    };

    async create(req, res){
        try{
            console.log("Category Controller")
            const data = req.body;
            const newCategory = await this.categoryService.create(data);
            res.status(201).json(newCategory)
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})

        }
    };

    // async getByIdPorduct(req, res){
    //     try{
    //         const categoryId = req.params.id;
    //         const products  = await this.categoryService.getByIdPorduct(categoryId);
    //         res.status(200).json(products)
    //     }catch (error){
    //         console.error(error);
    //     }
    // }
}

export { CategoryController }