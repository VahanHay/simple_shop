import { Router } from "express";

import { assignUserRoutes } from './../user/user-router.js';
import { assignCategoryRoutes } from "../category/category-router.js";
import { assignProductRoutes } from "../product/product-router.js";

const router = Router();

export function assignRoutes() {
    router.use('/user',assignUserRoutes());
    router.use('/category',assignCategoryRoutes());
    router.use('/product',assignProductRoutes());

    return router;
}
