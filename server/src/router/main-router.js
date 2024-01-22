import { Router } from "express";

import { assignUserRoutes } from './../user/user-router.js';
import { categoryRouter } from "../category/category-router.js";
import { productRouter } from "../product/product-router.js";

const router = Router();

export function assignRoutes() {
    router.use('/user',assignUserRoutes());
    router.use('/category',categoryRouter);
    router.use('/product',productRouter);

    return router;
}
