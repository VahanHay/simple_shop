import { EntitySchema } from "typeorm";
import {IsNotEmpty, IsString, IsDefined, Max, Min, IsInt,Length, isNotEmpty, Matches, IsEmail, IsPhoneNumber, IsAlpha} from 'class-validator';
const UserSchema = new EntitySchema({
  name: "User",
  tableName: "user",
  columns:{
    id: {
        primary:true,
        type:"int",
        generated:true,
    },
    first_name: {
        type:"varchar",
        validate: {
            isNotEmpty: IsNotEmpty({ message: 'Name cannot be empty' }),
            isString  : IsString  ({ message: 'Name must be a string' }),
            isDefined : IsDefined ({ message: 'Name must be defined'})
          },
    },
    last_name: {
        type:"varchar",
        validate: {
            isNotEmpty: IsNotEmpty({ message: 'Name cannot be empty' }),
            isString  : IsString  ({ message: 'Name must be a string' }),
            isDefined : IsDefined ({ message: 'Name must be defined'})
          },
    },
    age: {
        type: "int",
        validate:{
            min        : Min(0,{message:"Age must be more then 0"}),
            max        : Max(130,"Age must Real"),
            isDefined  : IsDefined({message:"Age must be defined"}),
            isInt      : IsInt({message:'Age must be Interger'}),
            isNotEmpty : isNotEmpty({message:"This row  can not emputy"}),
        }
    },
    password:{
      type:String,
      validate:{
        isNotEmpty: IsNotEmpty({message:"Password caon not be empty"}),
        length    : Length(8, 20, { message: 'Password must be between 8 and 20 characters' }),
        matches   : Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
          message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        })
      }
    },
    email: {
      type:String,
      validate:{
        isEmail : IsEmail({},{message:'Invalide email address'})
      },
    },
    address:{
      type:String,
      validate:{
        isNotEmpty:   IsNotEmpty({message:'Address can not be empty'}),
        isString:     IsString({message:'Address must be string'}),
      },
    },
    phoneNumber:{
      type:String,
      validate:{
        isNotEmpty:    IsNotEmpty({ message: 'Phone number cannot be empty' }),
        isPhoneNumber: IsPhoneNumber('ZZ', { message: 'Invalid phone number' }),
      },
    },
    country:{
      type:String,
      validate:{
        isNotEmpty: IsNotEmpty({ message: 'Country cannot be empty' }),
        isString:   IsString({ message: 'Country must be a string' }),
        isAlpha:    IsAlpha({ message: 'Country must contain only alphabetical characters' }),
      }
    }
  },
  relations: {
    cart: {
        type: 'one-to-many',
        target: 'ProductCart',
    },
    orders: {
      type: 'one-to-many',
      target: 'Order',
    },
  },
})

export {UserSchema};

