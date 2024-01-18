
import { CartRepazitory } from './cart-repazitory.js'

class CartService{

    async getCartById(cartId){
        try{
            const cartRepazitory = new CartRepazitory();
            const cart = await cartRepazitory.getCartById(cartId);
            return cart;
        }catch (error){
            console.error(error);
            throw new Error('Error getting cart from service');
        }

    };

    async createCart(cartData){
          try{
              const cartRepazitory = new CartRepazitory();
              const newCart = await cartRepazitory.createCart(cartData);
              return newCart;
          }catch(error){
              console.error(error);
              throw new Error('Error creating cart in service');
          }

    };

    async updateCatr(cartId, cartData){
        try{
            const cartRepazitory = new CartRepazitory();
            const updatedCart = await cartRepazitory.updateCatr(cartId, cartData);
            return await cartRepazitory.getCartById(cartId);
        }catch(error){
            console.error(error);
            throw new Error('Error updating cart in service');
        }
    };

    async deleteCart(cartId){
        try{
            const cartRepazitory = new CartRepazitory();
           const deleteCart = await cartRepazitory.deleteCart(cartId);
           return deleteCart;
        }catch (error){
            console.error(error);

        }
    }

}

export {CartService}

//
// try{
//
// }catch (error){
//     console.error(error);
// }