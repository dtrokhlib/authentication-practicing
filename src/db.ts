import { DataSource } from 'typeorm';
import { User } from './user/user.entity';

const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
const DATABASE_USER = process.env.DATABASE_USER || '';
const DATABASE_PORT = 5432;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
const DATABASE_NAME = 'image-resizer';



export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    entities: [User],
    synchronize: true,
    logging: false,
});
