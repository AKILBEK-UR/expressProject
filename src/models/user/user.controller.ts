import { Router, Request, Response } from "express";
import { UserService } from "./user.service";
import { generateToken } from "../../shared/generator.helper";
export const userRouter = Router();
const userService = new UserService();

userRouter.post("/signup", async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const user = await userService.signup({ username, email, password });
        res.status(201).json({
            message: `New account is created as ${user.username}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the account." });
    }
});


userRouter.post('/login', async (req: Request, res: Response) => {

    try {
      const { email, password } = req.body;
      const user = await userService.signin({email, password});
  
      if (user) {
        const token = generateToken(user.id);
        res.status(200).json({
          message: `User is logged in as ${user.email}`,
          token: token,
        });
      } else {
         res.status(401).json({message: 'Error occured!'});
      }
    } catch (error:any) {
        res.status(500).json({
          message: 'An error occurred while logging in!',
          error: error.message,
      });
    }
  });