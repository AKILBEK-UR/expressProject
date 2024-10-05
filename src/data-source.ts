import { DataSource } from 'typeorm';
import { User } from './entities/user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: `postgres://postgres:akilbek2003@localhost:5432/express`,
  entities: [User],
  logging:true,
  synchronize: true,
});
