import { Request, Response } from "express";
import {
  postPurchase,
  priceProduct,
  searchIdProduct,
  searchIdUser,
} from "../data/query";
import { purchase } from "../types";

export const purchases = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { user_id, product_id, quantity }: purchase = req.body;
    const newPurchase: purchase = {
      user_id,
      product_id,
      quantity,
    };

    Object.keys(newPurchase).forEach((key): void => {
      if (!newPurchase[key]) {
        errorCode = 404;
        throw new Error(`O ${key} não foi informado!`);
      }
      if (key !== "quantity" && typeof newPurchase[key] !== "string") {
        errorCode = 404;
        throw new Error(`O ${key} não é do tipo string!`);
      }
      if (
        (key === "quantity" && typeof newPurchase[key] !== "number") ||
        newPurchase[key] <= 0
      ) {
        errorCode = 404;
        throw new Error(
          newPurchase[key] <= 0
            ? `O ${key} tem valor menor ou igual a 0 !`
            : `O ${key} não é do tipo number!`
        );
      }
    });

    if (!(await searchIdUser(user_id as string))) {
      errorCode = 404;
      throw new Error(
        `O ID de usuário informado não existe no banco de dados!`
      );
    }

    if (!(await searchIdProduct(product_id))) {
      errorCode = 404;
      throw new Error(
        `O ID de produto informado não existe no banco de dados!`
      );
    }

    const price = await priceProduct(product_id);
    newPurchase.id = Date.now().toString();
    newPurchase.total_price = Number((price * quantity).toFixed(2));
    await postPurchase(newPurchase);

    res.status(201).send({
      message: "Compra do produto realizada com sucesso!",
      data: newPurchase,
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
