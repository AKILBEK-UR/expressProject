import jwt from 'jsonwebtoken';

export function generateToken(id:string): string{
    return jwt.sign({ userId: id }, process.env.JWT_SECRET as string, {
        expiresIn: '48h',
      });
}