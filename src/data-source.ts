import { DataSource } from "typeorm";
import "dotenv/config";
import { appendFile } from "fs";

const host = process.env.IS_COMPOSE ? "postgres" : "localhost";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;
