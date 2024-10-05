import { DataSource } from 'typeorm';
import { User } from './entities/user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port:5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  logging:true,
  synchronize: true,
});
