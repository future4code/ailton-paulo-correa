import { getAllTasks, getAllUsers } from "./connection";
import { task, user } from "./types";

export const checkEmail = (email: string): boolean => {
  const regex: any = /\W/;
  let check: string | string[] = email.replace("@", "-!");
  check = check.replace(".", "-!");
  check = check.split("-!");
  check[0] = check[0].replace("_", "");
  check[2] = check[2].replace(".", "");

  if (!check[0] || !check[1] || !check[2]) return true;
  if (check.length !== 3) return true;
  check = check.join("");
  return regex.test(check);
};

export const searchIdUser = async (id: string): Promise<boolean> => {
  const allUsers: user[] = await getAllUsers();

  for (const item of allUsers) if (item.id === id) return true;
  return false;
};

export const searchIdTask = async (id: string): Promise<boolean> => {
  const allTasks: task[] = await getAllTasks();

  for (const item of allTasks) if (item.id === id) return true;
  return false;
};

export const searchUserIdTask = async (userId: string): Promise<boolean> => {
  const allTasks: task[] = await getAllTasks();

  for (const item of allTasks) if (item.creatorUserId === userId) return true;
  return false;
};

export const checkFreeEmail = async (email: string): Promise<boolean> => {
  const allUsers: user[] = await getAllUsers();

  for (const item of allUsers)
    if (item.email.toUpperCase() === email.toUpperCase()) return true;
  return false;
};

export const checkFreeNickname = async (nickname: string): Promise<boolean> => {
  const allUsers: user[] = await getAllUsers();

  for (const item of allUsers)
    if (item.nickname.toUpperCase() === nickname.toUpperCase()) return true;
  return false;
};

export const checkDate = (date: string): boolean => {
  const month30Days: number[] = [4, 6, 9, 11];
  const month31Days: number[] = [1, 3, 5, 7, 8, 10, 12];
  const arrayDate: string[] = date.split("/") || date.split("-");
  const leapYear: boolean =
    Number(arrayDate[2]) % 400 === 0 ||
    (Number(arrayDate[2]) % 4 === 0 && Number(arrayDate[2]) % 100 !== 0);

  if (month30Days.includes(Number(arrayDate[0])) && Number(arrayDate[1]) > 30)
    return false;

  if (month31Days.includes(Number(arrayDate[0])) && Number(arrayDate[1]) > 31)
    return false;

  if (Number(arrayDate[0]) === 2 && Number(arrayDate[1]) > 29 && leapYear)
    return false;

  if (Number(arrayDate[0]) === 2 && Number(arrayDate[1]) > 28 && !leapYear)
    return false;

  return true;
};
