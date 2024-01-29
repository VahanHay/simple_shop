
import {OrderRepazitory} from './order-repazitory.js';
import {ProductCartRepository} from '../productCart/productCart-repazitory.js'

class OrderService {
    constructor() {
        this.orderRepazitory = new OrderRepazitory();
        this.productCartRepazitory = new ProductCartRepository();
    }

    async create(data){
        try{



            return this.orderRepazitory.create(data);
        }catch (error){
            console.error(error);
           throw new Error('bad request');
        }
    }

}

export {OrderService}