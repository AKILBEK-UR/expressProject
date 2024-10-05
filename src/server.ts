import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import { userRouter } from './models/user/user.controller';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/auth', userRouter);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => console.log('Database connection error: ', error));