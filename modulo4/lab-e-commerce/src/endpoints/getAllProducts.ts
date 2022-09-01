import { Request, Response } from "express";
import { allProducts } from "../data/query";
import { product } from "../types";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const products: product[] = await allProducts();

    res.status(200).send({ message: "", data: { products } });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
