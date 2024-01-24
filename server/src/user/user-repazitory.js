
import { getRepository } from 'typeorm';

import { UserSchema } from '../models/user-model.js';
import { ProductCartSchema } from '../models/productCart-model.js';



class UserRepository {

    constructor() {
        this.userRepository =getRepository(UserSchema)
    }
    async getAllUsers() {
       try{
           const allUsersWithoutPassword = await this.userRepository.find();

            return allUsersWithoutPassword
       }catch (error){
           console.error(error);
           throw new Error('Failing to get AllUsers from DB');//Make UserError Class in Error folder
       }
    }

    async getUserById(userId){
          try{
              const userWithoutPassword = await this.userRepository.findOne({
                  where: { id: userId },
                  select: ["id", "first_name", "last_name", "age", "email", "address", "phoneNumber", "country"],
                  exclude: ["password"],


              });

              if(!userWithoutPassword){
                  console.log("server user false")
                  throw new Error('User Not Found')//UserError
              }
              return userWithoutPassword;
          }catch (error){
              console.error(error);
              throw new Error(`Error fetching user with ID ${userId}`)
          }
    };

    async createUser(userData){
        try{
            console.log("User Repository creating User")
            const newUser = await this.userRepository.save(userData);
            const {password, ...newUserWithoutPassword} = newUser;
            return newUserWithoutPassword;
        }catch (error) {
            console.error(error);
            throw new Error('Error creating user in DB');
        }
        // Create a new user
        // const newUser = await this.userRepository.createUser({ ...userData, password: hashedPassword });
        //
        // // Create a new cart for the user
        // const newCart = await this.cartService.createCart(newUser.id);
        //
        // // Update the user with the created cart
        // newUser.cart = newCart;
        //
        // // Save the updated user with the cart information
        // const userWithCart = await this.userRepository.updateUser(newUser.id, { cart: newCart });
        //
        // return userWithCart;
    }
    async findEmail(email){
        console.log(email, " hayrapetyan")
        const exist =  await this.userRepository.findOne({where:{email}});
        console.log({...exist}, " Vahan")
        return !!exist;
    };

    async updateUser(userId, userData){
       try{
           const updateUser  = await  this.userRepository.update(userId,userData);
           const {password, ...updateUserWithoutPassword} = updateUser;
           return updateUserWithoutPassword;

       }catch(error){
           console.error(error);
           throw new Error('Error updating user in DB');
       }

    };

    async deleteUser(userId){
           try{
               const user  = await this.getUserById(userId);
               await this.userRepository.delete({ id: userId });

               const {password, ...deleteUserWithoutPassword} = user;
               return deleteUserWithoutPassword;


           }catch(error){
               console.error(error);
               throw new Error('Error deleting user');
           }
    }
  }

  export { UserRepository };