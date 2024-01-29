import { getRepository, In } from 'typeorm';

import { OrderSchema } from '../models/order-model.js';
import { ProductCartRepository } from '../productCart/productCart-repazitory.js'
import { ProductCartSchema } from '../models/productCart-model.js';


class OrderRepazitory {
    constructor() {
        this.orderRepazitory = new getRepository(OrderSchema);

    }

    async create(userId, productCartIds){
        
        console.log(productCarts);
    }
}

export {OrderRepazitory}