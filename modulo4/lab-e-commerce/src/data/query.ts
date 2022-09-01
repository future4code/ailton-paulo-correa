import { user } from "../types";
import { connection } from "./connection";

export const postUser = async (newUser: user): Promise<void> =>
  await connection().insert(newUser).into("labecommerce_users");

export const searchEmail = async (email: string): Promise<boolean> =>
  !!(await connection("labecommerce_users").where({ email }));

export const allUsers = async (): Promise<user[]> => {
  const users: user[] = await connection("labecommerce_users").select(
    "id",
    "name",
    "email"
  );
  return users;
};
