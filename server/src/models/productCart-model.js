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
        ordered: {
            type: 'boolean',
            default: false,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        },
        product: {
            type: 'many-to-one',
            target: 'Product',
            joinColumn: { name: 'product_id', referencedColumnName: 'id' },
        },
        order: {
            type: 'many-to-one',
            target: 'Order',
            joinColumn: { name: 'order_id', referencedColumnName: 'id' },
        },
    },
});

export { ProductCartSchema };