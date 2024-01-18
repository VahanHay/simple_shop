import { EntitySchema } from "typeorm";
import { IsNotEmpty, IsString, IsDefined } from 'class-validator';

const ProductCartSchema = new EntitySchema({
    name: "ProductCart",
    tableName: "product_cart",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        quantity: {
            type: 'int',
            isDefined: true,
        },
        // ... other product_cart columns
    },
    relations: {
        cart: {
            type: 'many-to-one',
            target: 'Cart',
            joinColumn: true,
        },
        product: {
            type: 'many-to-one',
            target: 'Product',
            joinColumn: true,
        },
    },
});

export { ProductCartSchema };