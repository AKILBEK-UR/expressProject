// // src/models/user/user.controller.ts
// import { Request, Response } from 'express';
// import { AppDataSource } from '../data-source';
// import { User } from '../entities/user';
// import { userRouter } from '../models/user/user.controller';

// export const already_exist = userRouter.post('/signup', async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   const userRepository = AppDataSource.getRepository(User);

//   const existingUser = await userRepository.findOneBy({ email });

//   if (existingUser) {
//      res.status(400).json({ message: 'User already exists' });
//   }

//   const newUser = userRepository.create({ email, password });
//   await userRepository.save(newUser);

//    res.status(201).json({ message: 'User registered successfully' });
// });
