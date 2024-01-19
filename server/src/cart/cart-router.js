import { Router } from 'express';

import { CartController } from "./cart-controller.js";

const cartController = new CartController()
const cartRouter = Router();


cartRouter.get( '/:id',cartController.getCartById);

cartRouter.post('/', cartController.createCart);

cartRouter.put('/:id',cartController.updateCatr);

cartRouter.delete('/:id', cartController.deleteCart);



export {cartRouter}


// |src-
//     |server-
//          |models-
//                 --user-model.js
//                 --cart-model.js
//                 --product-model.js
//                 --category-model.js
//                 --productCategory-model.js
//          |user-
//                 --user-router.js
//                 --user-controller.js
//                 --user-service.js
//                 --user-repazitory.js
//          |cart-
//                 --cart-router.js
//                 --cart-controller.js
//                 --cart-service.js
//                 --cart-repazitory.js
//          |product-
//                 --product-router.js
//                 --product-controller.js
//                 --product-service.js
//                 --product-repazitory.js
//          |category-
//                 --category-router.js
//                 --category-controller.js
//                 --category-service.js
//                 --category-repazitory.js