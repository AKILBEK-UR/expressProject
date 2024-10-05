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
    const hashed = await bcrypt.hash(this.password, 10);
    return hashed;
  }
}
