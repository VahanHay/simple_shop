

import {EntitySchema} from 'typeorm'
import {IsNotEmpty, IsString, IsDefined } from 'class-validator';
                                       

const CategorySchema = new EntitySchema({
    name:"Category",
    tableName:"category",
    columns:{
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
    },
    relations: {
        products: {
            target: 'ProductCategory',
            type: 'one-to-many',
            inverseSide: 'category',
        },
    },
   
});

export {CategorySchema}