import { task, user } from "./types";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
export const connection: any = knex({
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
  const result: task[] = await connection
    .select(
      "Tasks.id",
      "Tasks.title",
      "Tasks.description",
      "Tasks.limitDate",
      "Tasks.creatorUserId",
      "Tasks.status",
      "Users.nickname"
    )
    .from("Tasks")
    .where("Tasks.id", id)
    .leftJoin("Users", "Users.id", "Tasks.creatorUserId");

  return result[0];
};

export const putUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  let result: any;
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
    .insert({
      id,
      title,
      description,
      limitDate,
      creatorUserId,
      status: "a fazer",
    })
    .into("Tasks");
  console.log(result);
  return result;
};

export const allUserNick = async (): Promise<any> => {
  const result: user[] = await connection("Users").select("id", "nickname");
  return result;
};

export const taskByUserID = async (userId: string): Promise<any> => {
  const result: task[] = await connection
    .select(
      "Tasks.id",
      "Tasks.title",
      "Tasks.description",
      "Tasks.limitDate",
      "Tasks.creatorUserId",
      "Tasks.status",
      "Users.nickname"
    )
    .from("Tasks")
    .where("Tasks.creatorUserId", userId)
    .leftJoin("Users", "Users.id", "Tasks.creatorUserId");

  return result;
};

export const userByNickname = async (nickname: string): Promise<any> => {
  const result: user[] = await connection
    .select("id", "nickname")
    .from("Users")
    .where("nickname", "LIKE", `%${nickname.toLowerCase()}%`);
  return result;
};

export const responsibleUser = async (
  userID: string,
  taskID: string
): Promise<any> => {
  const result: user[] = await connection
    .queryBuilder()
    .insert({
      id: Date.now().toString(),
      responsible_user_id: userID,
      task_id: taskID,
    })
    .into("Responsible");
  return result;
};
