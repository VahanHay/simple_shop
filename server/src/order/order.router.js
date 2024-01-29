import {OrderController} from "./order-controller.js";
import {Router} from "express";

export function assignOrderRoutes() {
    const orderController = new OrderController();
    const orderRouter = Router();

    orderRouter.post('/',orderController.create.bind(orderController))

    return orderRouter;
}