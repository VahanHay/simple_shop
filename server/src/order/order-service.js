
import {OrderRepazitory} from './order-repazitory.js';
import {ProductCartRepository} from '../productCart/productCart-repazitory.js'

class OrderService {
    constructor() {
        this.orderRepazitory = new OrderRepazitory();
        this.productCartRepazitory = new ProductCartRepository();
    }

    async create(data){
        try{
            // TODO: get product carts
            /**
             * get product carts
             * check every product count
             * create order row (implement create method on order repo)
             * make ordered property of every productCart to true (create method to update productCart on productCart repo) - https://stackoverflow.com/questions/53790994/bulk-update-via-raw-query-in-typeorm
             */

            return this.orderRepazitory.create(data);
        }catch (error){
            console.error(error);
           throw new Error('bad request');
        }
    }

}

export {OrderService}