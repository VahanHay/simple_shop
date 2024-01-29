import { Router } from 'express';
import { UserController } from './user-controller.js';

export function assignUserRoutes() {
    const userController = new UserController();
    const userRouter = Router();

    userRouter.get('/',userController.getAllUsers.bind(userController));
    userRouter.get('/:id',userController.getUserById.bind(userController));
    
    userRouter.post('/', userController.createUser.bind(userController));
    
    userRouter.put('/:id',userController.updateUser.bind(userController));
    
    userRouter.delete('/:id',userController.deleteUser.bind(userController));

    return userRouter;
}

// Create a new order for a user
//userRouter.post('/:id/orders', userController.createOrder);

// Get user's cart
//userRouter.get('/:id/cart', userController.getUserCart);