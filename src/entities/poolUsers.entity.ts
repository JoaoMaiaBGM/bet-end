import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pool } from "./pool.entity";
import { User } from "./user.entity";

@Entity("poolUsers")
export class PoolUsers {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Pool)
  pool: Pool;
}
