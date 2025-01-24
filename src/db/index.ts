import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

export const db = new Pool({
  user: process.env.PGUSER!,
  password: process.env.PASSWORD!,
  database: process.env.PGDATABASE!,
  port: +process.env.PGPORT!,
  host: process.env.PGHOST!,
});
