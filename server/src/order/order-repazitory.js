import { getRepository } from 'typeorm';

import { OrderSchema } from '../models/order-model.js';
import {} from '../productCart/productCart-repazitory.js'


class OrderRepazitory {
    constructor() {
        this.orderRepazitory = new getRepository(OrderSchema);
    }

    async create(){

    }
}

export {OrderRepazitory}