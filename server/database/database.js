
import { createConnection } from 'typeorm';
import 'dotenv/config';

import { UserSchema} from './../src/models/user-model.js';
import { CategorySchema } from '../src/models/category-model .js';
import { ProductSchema }  from '../src/models/product-model.js';
import { OrderSchema } from '../src/models/order-model.js'
import { ProductCartSchema } from '../src/models/productCart-model.js'

const connectDatabase = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [ UserSchema, 
                  CategorySchema,
                  ProductSchema,
                  OrderSchema,
                  ProductCartSchema
                ],
      synchronize: true,
      logging: true,
      
    });

    console.log('Соединение с базой данных установлено');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
};

export { connectDatabase };
