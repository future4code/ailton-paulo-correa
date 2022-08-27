import { task, user } from "./types";
import knex from "knex";
import dotenv from "dotenv";

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
  const result: user[] = await connection
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

export const getAllTasks = async (): Promise<task[]> => {
  const result: task[] = await connection
    .queryBuilder()
    .select("*")
    .from("Tasks");
  return result;
};

export const getUser = async (id: string): Promise<user> => {
  const result: user[] = await connection("Users").where("id", id);
  return result[0];
};

export const getTask = async (id: string): Promise<task> => {
  console.log("AAAAq");

  const result: task[] = await connection
    .select(
      "Tasks.id",
      "Tasks.title",
      "Tasks.description",
      "Tasks.limitDate",
      "Tasks.creatorUserId",
      "Users.nickname"
    )
    .from("Tasks")
    .where("Tasks.id", id)
    .leftJoin("Users", "Users.id", "Tasks.creatorUserId");

  console.log(result);
  console.log("aaaa");

  return result[0];
};

export const putUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  let result;
  if (!!name)
    result = await connection("Users").update("name", name).where("id", id);
  if (!!nickname)
    result = await connection("Users")
      .update("nickname", nickname)
      .where("id", id);
  return result;
};

export const postTask = async ({
  id,
  title,
  description,
  limitDate,
  creatorUserId,
}: task): Promise<any> => {
  const result: task[] = await connection
    .queryBuilder()
    .insert({ id, title, description, limitDate, creatorUserId })
    .into("Tasks");
  console.log(result);
  return result;
};
