import { Router } from "express";

import { userRouter } from './../user/user-router.js';
import { cartRouter } from "../cart/cart-router.js";

const router = Router();

router.use('/user',userRouter);
router.use('/cart',cartRouter)


export {router}