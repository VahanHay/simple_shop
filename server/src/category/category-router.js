import { Router } from 'express';

import { CategoryController } from "./category-controller.js";


export function assignCategoryRoutes(){

    const  categoryController = new CategoryController();
    const categoryRouter = Router();

    categoryRouter.get('/',categoryController.getAll.bind(categoryController));
    categoryRouter.get('/:id',categoryController.getById.bind(categoryController));
    categoryRouter.post('/',categoryController.create.bind(categoryController));
    //categoryRouter.get('/:id',categoryController.getByIdPorduct.bind(categoryController));

    //categoryRouter.put('/',categoryController.update.bind(categoryController));
    //categoryRouter.delete('/',categoryController.delete.bind(categoryController));

    return categoryRouter;
}

