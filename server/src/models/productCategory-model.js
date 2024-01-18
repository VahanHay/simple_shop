
import { EntitySchema } from 'typeorm';

const ProductCategorySchema = new EntitySchema({
    name: 'ProductCategory',
    tableName: 'product_category',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
    },
    relations: {
        product: {
            target: 'Product',
            type: 'many-to-one',
            joinColumn: {
                name: 'productId',
            },
        },
        category: {
            target: 'Category',
            type: 'many-to-one',
            joinColumn: {
                name: 'categoryId',
            },
        },
    },
});

export { ProductCategorySchema };












// import {EntitySchema} from 'typeorm';

// import { ProductSchema } from './product-model.js';
// import {CategorySchema}  from './category-model .js';

// const ProductCategorySchema = new EntitySchema({
//     name:"ProductCategory",
//     tableName:"product_category",
//     columns:{
//         id: {
//             type:"int",
//             primary:true,
//             generated:true,
//         },
//         productId: {
//             type: "int",
//             nullable: false,
//         },
//         categoryId: {
//             type: "int",
//             nullable: false,
//         },
//     },
//     relations: {
//         product: {
//             target: ProductSchema,
//             type:"many-to-one",
//             joinColumn:{
//                 name:"productId"
//             },
//         },
//         category: {
//             target: CategorySchema,
//             type:"many-to-one",
//             joinColumn:{
//                 name:"categoryId",
//             }
//         }
//     },
// });

// export {ProductCategorySchema}