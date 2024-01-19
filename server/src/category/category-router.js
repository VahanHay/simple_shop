import { Router } from 'express';

import { CategoryController } from "./category-controller.js";

const  categoryController = new CategoryController();

const categoryRouter = Router();

categoryRouter.get('/',categoryController.getAllCategories);


export { categoryRouter }