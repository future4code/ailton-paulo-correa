import { product, purchase, user } from "../types";
import { connection } from "./connection";

export const postUser = async (newUser: user): Promise<void> =>
  await connection().insert(newUser).into("labecommerce_users");

export const searchEmail = async (email: string): Promise<boolean> =>
  !!(await connection("labecommerce_users").where({ email })).length;

export const allUsers = async (): Promise<user[]> =>
  await connection("labecommerce_users").select("id", "name", "email");

export const postProduct = async (newProduct: product): Promise<void> =>
  await connection().insert(newProduct).into("labecommerce_products");

export const allProducts = async (): Promise<product[]> =>
  await connection("labecommerce_products").select("*");

export const postPurchase = async (newPurchase: purchase): Promise<void> =>
  await connection().insert(newPurchase).into("labecommerce_purchases");

export const searchIdUser = async (id: string): Promise<boolean> =>
  !!(await connection("labecommerce_users").where({ id })).length;

export const priceProduct = async (id: string): Promise<number> => {
  const res: { price: number }[] = await connection("labecommerce_products")
    .select("price")
    .where({ id });
  return res[0].price;
};

export const purchasesUser = async (user_id: string): Promise<purchase[]> =>
  await connection("labecommerce_purchases").where({ user_id });
