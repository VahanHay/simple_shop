

import bcrypt from 'bcrypt'
import {UserRepository} from "./user-repazitory.js"


class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

      async getAllUsers(){
          try{
              const allUsers = await this.userRepository.getAllUsers();
              return allUsers;
          }catch (error){
              console.error(error);
              throw new Error('Error getting users')
          }
    };
      async getUserById(userId){
         try{
             const user =await this.userRepository.getUserById(userId);
             return user;
         }catch (error){
             console.error(error);
             throw new Error('Error getting user')
         }

      };
      async createUser(userData){
          try{
              const {first_name, last_name, age, password, email, phoneNumber, country, address} = userData;

              if(!first_name || !last_name || !age || !password || !email || !phoneNumber || !country || !address){
                  throw new Error('Missing Data');
              }

              const exist = await this.userRepository.findEmail(email);
              if(exist){
                  throw new Error('Email is Exist');
              }
              const salt = await bcrypt.genSalt(6);
              const hashed = await bcrypt.hash(password, salt);

              userData.password = hashed;
              userData.age= +userData.age;

              const newUser = await this.userRepository.createUser(userData);

              return newUser;
          }catch(error){
              console.error(error);
              throw new Error('Error creating user in DB');
          }
      };

      async updateUser(userId, userData){
        try{
            await this.userRepository.updateUser(userId, userData);
            return this.userRepository.getUserById(userId);
        }catch (error){
            console.error(error);
        }
      };

      async deleteUser(userId){
          try{
              const deleteUser = await this.userRepository.deleteUser(userId);
              return deleteUser;
          }catch(error){
              console.error(error);
              throw new Error('Error deleting user');
          }
      }

}

export { UserService }

