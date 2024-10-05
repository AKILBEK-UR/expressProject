import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from "bcrypt"
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
    id!: string;

  @Column({ unique: true })
    username!: string;

  @Column()
    email!: string;
  
  @Column()
    password!: string;

  async hashPassword(password: string):Promise<string> {
    const saltRounds = 10; 
    return bcrypt.hash(password, saltRounds);
  }
}
