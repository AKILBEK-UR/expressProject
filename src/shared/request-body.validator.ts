import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export function validateReqBody(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Parse the request body using the provided schema
      const parsedBody = schema.parse(req.body);
      
      // If parsing succeeds, update req.body with parsedBody and call next()
      req.body = parsedBody;
      next();  // Call next() without returning anything
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => err.message);

        // Send a 400 response with the error messages
        res.status(400).json({
          message: "Bad Request",
          errors: errorMessages,
        });
        return;  // Ensure the function exits here after sending a response
      }

      // Handle unexpected errors
      res.status(500).json({
        message: "Internal Server Error",
        errors: ["An unexpected error occurred"],
      });
      return;  // Ensure the function exits here after sending a response
    }
  };
}
