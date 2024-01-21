
import {ProductService} from "./product-service.js";

 class ProductController {
   async getAll(req, res){
        try{
            const productService = new ProductService();
               const allUsers = await productService.getAll();
               res.status(200).json(allUsers);
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    };

   async addToCart(req, res){
       try{
        const productService = new ProductService();
        const {id} = req.params;
        await productService.addToCart({ ...req.body, id: +id });

        res.status(200).json();
       }catch (error){
           console.error(error);

           res.status(500).json({message:'Internal Server Error'})
       }
   };

   async create(req, res){
       try{
        const productService = new ProductService();
           const userData = req.body;

           const newUser = await productService.create(userData);
           res.status(201).json(newUser)
       }catch (error){
           console.error(error);
           res.status(500).json({message:'Internal Server Error'})
       }
   };
}

export { ProductController }


