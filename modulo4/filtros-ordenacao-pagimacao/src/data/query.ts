import { allFilters, user, userOrder } from "../types";
import { connection } from "./connection";

export const selectAllUsers = async (): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`);
  return res;
};

export const selectUserByName = async (name: string): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`).whereRaw(
    "name LIKE ?",
    `%${name}%`
  );
  return res;
};

export const selectUserByType = async (type: string): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`).whereRaw(
    "type LIKE ?",
    `%${type}%`
  );
  return res;
};

export const selectUserOrder = async ({
  columnOrder,
  order,
}: userOrder): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`).orderBy(
    columnOrder as string,
    order ? order.toUpperCase() : "ASC"
  );
  return res;
};

export const selectUserByPage = async (page: number): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`)
    .limit(5)
    .offset(5 * (page - 1));
  return res;
};

export const selectUserAllFilters = async ({
  name,
  type,
  columnOrder,
  order,
  page,
}: allFilters): Promise<user[]> => {
  const res: user[] = await connection(`aula48_exercicio`)
    .whereRaw(`name LIKE ?`, name ? `%${name}%` : `%${""}%`)
    .andWhereRaw(`type LIKE ?`, type ? `%${type}%` : `%${""}%`)
    .orderBy(
      columnOrder as string,
      order ? order.toUpperCase() : "DESC"
    )
    .limit(5)
    .offset(page ? 5 * (Number(page) - 1) : 0);
  return res;
};
