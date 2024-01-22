import { Router } from 'express';
import { UserController } from './user-controller.js';

export function assignUserRoutes() {
    const userController = new UserController();
    const userRouter = Router();
    
    userRouter.get('/',userController.getAllUsers);
    userRouter.get('/:id',userController.getUserById);
    
    userRouter.post('/', userController.createUser);
    
    userRouter.put('/:id',userController.updateUser);
    
    userRouter.delete('/:id',userController.deleteUser);

    return userRouter;
}

// Create a new order for a user
//userRouter.post('/:id/orders', userController.createOrder);

// Get user's cart
//userRouter.get('/:id/cart', userController.getUserCart);