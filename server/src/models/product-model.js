import { EntitySchema } from "typeorm";
import { IsNotEmpty, IsString, IsDefined, IsNumber, Min, Max, IsArray, IsInt, IsPositive, IsBoolean } from 'class-validator';

const ProductSchema = new EntitySchema({
    name:"Product",
    tableName:"product",
    columns: {
        id: {
            primary:true,
            type:"int",
            generated:true,
        },
        name: {
            type:"varchar",
            validate: {
                isNotEmpty: IsNotEmpty({ message: 'Name cannot be empty' }),
                isString  : IsString  ({ message: 'Name must be a string' }),
                isDefined : IsDefined ({ message: 'Name must be defined'})
              },
        },
        description: {
            type: "text",
            validate: {
                isNotEmpty: IsNotEmpty({ message: 'Description cannot be empty' }),
                isString: IsString({ message: 'Description must be a string' }),
                isDefined: IsDefined({ message: 'Description must be defined' })
            },
        },
        price: {
            type: "decimal",
            precision: 10,
            scale: 2,
            validate: {
                isDefined: IsDefined({ message: 'Price must be defined' }),
                isNumber: IsNumber({}, { message: 'Price must be a number' }),
                min: Min(0, { message: 'Price cannot be negative' }),
                max: Max(1000000, { message: 'Price cannot be greater than 1,000,000' }),
            },
        },
        count: {
            type: "int",
            validate: {
                isDefined: IsDefined({ message: 'Count must be defined' }),
                isNumber: IsNumber({}, { message: 'Count must be a number' }),
                min: Min(0, { message: 'Count cannot be negative' }),
            },
        },
        // comments:{
        //     type:'varchar',
        //     array:true,
        //     nullable:true,
        //     validate:{
        //         isArray:IsArray({ message: 'Comments must be an array of strings' }),
        //     },  
        // },
        // rating: {
        //     type: "float",
        //     validate: {
        //         isDefined: IsDefined({ message: 'Rating must be defined' }),
        //         isFloat: IsNumber({ message: 'Rating must be a float' }),
        //         min: Min(1.0, { message: 'Rating must be at least 1.0' }),
        //         max: Max(5.0, { message: 'Rating cannot be more than 5.0' }),
        //     },
        // },
        // likes: {
        //     type: "int",
        //     validate: {
        //         isDefined: IsDefined({ message: 'Likes must be defined' }),
        //         isInt: IsInt({ message: 'Likes must be an integer' }),
        //         isPositive: IsPositive({ message: 'Likes must be a positive integer' }),
        //     },
        // },
        // available: {
        //     type: "boolean",
        //     default: true, 
        //     validate: {
        //         isBoolean: IsBoolean({ message: 'Available must be a boolean' }),
        //     },
        // },
    },
    relations: {
        categories: {
            target: 'Category',
            type: 'many-to-many',
        },
        productCarts: {
            type: 'one-to-many',
            target: 'ProductCart',
        },
    },
});

export {ProductSchema}


//import { ProductCategorySchema } from './productCategory-model.js'; 
//import * as validator from 'class-validator';

//const { IsNotEmpty, IsString, IsDefined, IsNumber, Min, Max, IsArray, IsInt, IsFloat, IsPositive, IsBoolean } = validator;
