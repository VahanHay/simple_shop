
import {UserService} from "./user-service.js";

//const userService = new UserService();
 class UserController {
    constructor() {
        this.userService = new UserService()

    }
   async getAllUsers(req, res){
        try{
               const allUsers = await this.userService.getAllUsers();
            console.log({...allUsers})
               res.status(200).json(allUsers);
        }catch (error){
            console.error(error);
            res.status(500).json({error:'Internal Server Error'})
        }
    };

   async getUserById(req, res){
       try{
           const userId = parseInt(req.params.id, 10);
           const user = await this.userService.getUserById(userId);
           if(!user){
               res.status(404).json(`User Not Found`);
               return;
           }
           res.status(200).json(user);
       }catch (error){
           console.error(error);

           res.status(500).json({message:'Internal Server Error'})
       }
   };

   async createUser(req, res){
       try{
           const userData = req.body;
           console.log({...userData})
           console.log('User Controller createUser');//ok
           const newUser = await this.userService.createUser(userData);
           res.status(201).json(newUser)
       }catch (error){
           console.error(error);
           res.status(500).json({message:'Internal Server Error'})
       }
   };

   async updateUser(req, res){
       try{
           const userData = req.body;
           const userId = parseInt(req.params.id);
           const existingUser = await  this.userService.getUserById(userId);
           if(!existingUser){
               res.status(404).json({message:'UserNot Found'});
               return;
           }

           const updateUser = await this.userService.updateUser(userId,userData);
           res.status(200).json(updateUser)

       }catch(error){
           console.error(error);
           res.status(500).json({message:'Internal Server Error'})
       }

   };

   async deleteUser(req, res){
       try{
           const userId = req.params.id;
           const existingUser = await this.userService.getUserById(userId);
           if (!existingUser) {
               res.status(404).json({message: 'UserNot Found'});
               return;
           }

           const deleteUser = await this.userService.deleteUser(userId);
           res.status(202).json(deleteUser);
       }catch(error){
           console.error(error);
           throw new Error('Delete is not succsed');
       }
   };

   // async getUserCart(req, res){
   //     const userId = req.params.id;
   //     const user = await
   // }
}

export { UserController }


