import { getRepository } from 'typeorm';

import { CartSchema } from '../models/cart-model.js';

class CartRepazitory {
    constructor() {
        this.cartRepository = getRepository(CartSchema)
    }

    async getCartById(cartId){
           try{
                const cart = this.cartRepository.findOne(cartId,{
                    relations: ['products'],
                });
                if(!cart){
                    throw new Error('Cart not found');
                }
                return cart;
           }catch(error){
               console.error(error);
               throw new Error(`Error getting cart with ID ${cartId}`);
           }
    };

    async createCart(cartData){
            try{
                const newCart = await this.cartRepository.save(cartData);
                return newCart;
            }catch(error){
                console.error(error);
                throw new Error('Error creating cart in DB');
            }
    };
    async updateCatr(cartId, cartData){
        try{
             const updateCart =  await this.cartRepository.update(cartId, cartData);

             return updateCart;
        }catch(error){
            console.error(error);
            throw new Error('Error updating cart in DB');

        }
    };

    async deleteCart(cartId){
        try{
            const cart = await this.getCartById(cartId);
            const deleteCart = await this.cartRepository.delete({id:cartId});
        }catch (error){
            console.error(error);

        }
    }



}

export { CartRepazitory }