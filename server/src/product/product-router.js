import { Router } from 'express';
import { ProductController } from './product-controller.js';

export function assignProductRoutes(){

    const productController = new ProductController();
    const productRouter = Router();

    productRouter.get('/',productController.getAll.bind(productController));
    productRouter.get('/:id',productController.getById.bind(productController));
   // productRouter.get('/category/:id',productController.getByCategory.bind(productController));
    productRouter.post('/:id/add',productController.addToCart.bind(productController));
    productRouter.post('/', productController.create.bind(productController));

    return productRouter;
}


