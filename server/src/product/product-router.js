import { Router } from 'express';
import { ProductController } from './product-controller.js';

const productController = new ProductController();
const productRouter = Router();

productRouter.get('/',productController.getAll);
productRouter.post('/:id/add',productController.addToCart);
productRouter.post('/', productController.create);

export { productRouter };
