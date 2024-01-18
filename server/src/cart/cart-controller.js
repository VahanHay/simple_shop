import { CartService } from "./cart-service.js";


class CartController{
    async getCartById(req, res){
           try{
               const cartService = new CartService();
               const cartId = parseInt(req.params.id, 10);
               const cart = await cartService.getCartById(cartId);
               res.status(200).json(cart);
           }catch (error){
               console.error(error);
               res.status(500).json({ error: 'Internal Server Error' });
           }

    };

    async createCart(req, res){
        try{
            const cartService = new CartService();
            const cartData = req.body;
            const newCart = cartService.createCart(cartData);
            res.status(201).json(newCart);
        }catch (error){
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    };

    async updateCatr(req, res){
        try{
            const cartService = new CartService()
            const cartId   = arseInt(req.params.id, 10);
            const cartData = req.body;
            const updatedCatr = await cartService.updateCatr(cartId, cartData);
            res.status(200).json(updatedCatr);
        }catch(error){
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'})
        }
    };

    async deleteCart(req, res){
        try{
            const cartId = parseInt(req.params.id, 10);
            const cartService = new CartService();
            const deleteCart = await cartService.deleteCart(cartId);
            res.status(202).json(deleteCart)
        }catch (error){
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });

        }
    }

}

export {CartController}