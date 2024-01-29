
import {ProductService} from "./product-service.js";

 class ProductController {

     constructor(){
         this.productService = new ProductService();
     }
   async getAll(req, res){
        try{
              const allUsers = await this.productService.getAll();
               res.status(200).json(allUsers);
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    };

   async addToCart(req, res){
       try{
        const {id} = req.params;
        const basket = await this.productService.addToCart({ ...req.body, id: +id });
         //res.status(200).json(basket);
        res.status(200).json(basket);
       }catch (error){
           console.error(error);

           res.status(500).json({message:'Internal Server Error'})
       }
   };

   async create(req, res){
       try{

           const productData = req.body;
           console.log({...productData})
           const newProduct = await this.productService.create(productData);

           res.status(201).json(newProduct)
       }catch (error){
           console.error(error);
           res.status(500).json({message:'Internal Server Error'})
       }
   };

   async getById(req ,res){
       try{

           const productId = parseInt(req.params.id);
           const getProductById = await this.productService.getById(productId);
           res.status(200).json(getProductById);
       }catch (error){
           console.error(error);
           res.status(400).json({message:"Bed Request"});
       }

   };

     async getByCategory(req, res) {
         try {
             const categoryId = req.params.id; // Assuming categoryId is part of the URL
             const productsInCategory = await this.productService.getByCategory(categoryId);
             res.status(200).json(productsInCategory);
         } catch (error) {
             console.error(error);
             res.status(500).json({ error: 'Failed to get products by category' });
         }
     }
}

export { ProductController }


