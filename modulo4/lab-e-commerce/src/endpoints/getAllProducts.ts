import { Request, Response } from "express";
import { allProducts } from "../data/query";
import { product } from "../types";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    let order: string = req.query.order as string;
    let search: string = req.query.search as string;

    if (!order) order = "";
    if (!search) search = "";
    if (order.toLowerCase() !== "asc" && order.toLowerCase() !== "desc")
      order = "";

    const products: product[] = await allProducts(order, search);

    res.status(200).send({ message: "Lista de Produtos", data: { products } });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
