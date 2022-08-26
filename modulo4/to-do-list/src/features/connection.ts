import knex from "knex";
import dotenv from "dotenv";
import { user } from "./types";

dotenv.config();
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

export const createUser = async ({
  id,
  name,
  nickname,
  email,
}: user): Promise<any> => {
  const result = await connection
    .queryBuilder()
    .insert({ id, name, nickname, email })
    .into("Users");
  return result;
};

export const getAllUsers = async (): Promise<user[]> => {
  const result: user[] = await connection
    .queryBuilder()
    .select("*")
    .from("Users");
  return result;
};
