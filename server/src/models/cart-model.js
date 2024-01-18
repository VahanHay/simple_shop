import { EntitySchema } from "typeorm";
import { IsDefined, IsDate } from 'class-validator';

const CartSchema = new EntitySchema({
    name: "Cart",
    tableName: "cart",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        createdate: {
            type: "timestamp",
            createDate: true,
            nullable: false,
            validate: {
                isDefined: IsDefined({ message: 'Creation date must be defined' }),
                isDate: IsDate({ message: 'Creation date must be a valid date' }),
            },
        },
        deletedate: {
            type: "timestamp",
            nullable: true,
            validate: {
                isDate: IsDate({ message: 'Deletion date must be a valid date' }),
            },
        },
    },
    relations: {
        user: {
            type: "one-to-one",
            target: "User",
            joinColumn: { name: "user_id", referencedColumnName: "id" },
        },
        productCarts: {
            type: 'one-to-many',
            target: 'ProductCart',
            inverseSide: 'cart',
        },
    }
});

export { CartSchema };