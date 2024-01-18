import { Router } from 'express';

import { CartController } from "./cart-controller.js";

const cartController = new CartController()
const cartRouter = Router();


cartRouter.get( '/:id',cartController.getCartById);

cartRouter.post('/', cartController.createCart);

cartRouter.put('/:id',cartController.updateCatr);

cartRouter.delete('/:id', cartController.deleteCart)

export {cartRouter}