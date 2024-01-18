

import bcrypt from 'bcrypt'
import {UserRepository} from "./user-repazitory.js"


class UserService {

      async getAllUsers(){
          try{
              const userRepository = new UserRepository();
              const allUsers = await userRepository.getAllUsers();
              return allUsers;
          }catch (error){
              console.error(error);
              throw new Error('Error getting users')
          }
    };
      async getUserById(userId){
         try{
             console.log('User service userbrid')
             const userRepository = new UserRepository();
             const user =await userRepository.getUserById(userId);
             return user;
         }catch (error){
             console.error(error);
             throw new Error('Error getting user')
         }

      };
      async createUser(userData){
          try{
              const userRepository = new UserRepository();
              console.log('"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"')
              console.log({...userData})
              const {first_name, last_name, age, password, email, phoneNumber, country, address} = userData;
              if(!first_name || !last_name || !age || !password || !email || !phoneNumber || !country || !address){
                  throw new Error('Missing Data');
              }
              const exist = await userRepository.findEmail(email);
              console.log(exist, 'kkkk')
              if(exist){
                  throw new Error('Email is Exist');
              }
              const salt = await bcrypt.genSalt(6);
              const hashed = await bcrypt.hash(password, salt);
              userData.password = hashed;
              userData.age= +userData.age;
              console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
              const newUser =await userRepository.createUser(userData);
              return newUser;
          }catch(error){
              console.error(error);
              throw new Error('Error creating user in DB');
          }
      };

      async updateUser(userId, userData){
        try{
            const userRepository = new UserRepository();
            await userRepository.updateUser(userId, userData);
            return await userRepository.getUserById(userId);
        }catch (error){
            console.error(error);

        }
      };

      async deleteUser(userId){
          try{
              const userRepository = new UserRepository();
              //console.log('user service delete')
              const deleteUser = await userRepository.deleteUser(userId);
              return deleteUser;
          }catch(error){
              console.error(error);
              throw new Error('Error deleting user');
          }
      }

}

export { UserService }

