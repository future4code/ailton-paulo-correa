import { getAllUsers } from "./connection";
import { user } from "./types";

export const checkEmail = (email: string): boolean => {
  const regex: any = /\W/;
  let check: string | string[] = email.replace("@", "-!");
  check = check.replace(".", "-!");
  check = check.split("-!");
  check[0] = check[0].replace("_", "");

  if (!check[0] || !check[1] || !check[2]) return true;
  if (check.length !== 3) return true;
  check = check.join("");
  return regex.test(check);
};

export const checkFreeEmail = async (email: string) => {
  const allUsers: user[] = await getAllUsers();

  for (const item of allUsers)
    if (item.email.toUpperCase() === email.toUpperCase()) return true;
  return false;
};
export const checkFreeNickname = async (nickname: string) => {
  const allUsers: user[] = await getAllUsers();
  
  for (const item of allUsers)
    if (item.nickname.toUpperCase() === nickname.toUpperCase()) return true;
  return false;
};
