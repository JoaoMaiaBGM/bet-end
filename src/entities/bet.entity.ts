import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Matches } from "./matches.entity";
import { Pool } from "./pool.entity";
import { User } from "./user.entity";

@Entity("bet")
export class Bet {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: null })
  result: string;

  @Column({ type: "integer", default: 0 })
  score: number;

  @Column({ type: "integer", default: 0 })
  points: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Matches)
  matches: Matches;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Pool)
  pool: Pool;
}
