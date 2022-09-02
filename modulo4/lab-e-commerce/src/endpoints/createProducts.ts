import { Request, Response } from "express";
import { checkImageUrl } from "../data/functions";
import { postProduct } from "../data/query";
import { product } from "../types";

export const createProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { name, price, image_url }: product = req.body;
    const newProduct: product = { name, price, image_url };

    Object.keys(newProduct).forEach((key): void => {
      if (!newProduct[key]) {
        errorCode = 404;
        throw new Error(`O ${key} não foi informado!`);
      }
      if (key !== "price" && typeof newProduct[key] !== "string") {
        errorCode = 404;
        throw new Error(`O ${key} não é do tipo string!`);
      }
      if (
        (key === "price" && typeof newProduct[key] !== "number") ||
        newProduct[key] <= 0
      ) {
        errorCode = 404;
        throw new Error(
          newProduct[key] <= 0
            ? `O ${key} tem valor menor ou igual a 0 !`
            : `O ${key} não é do tipo number!`
        );
      }
    });

    if (!newProduct.image_url || !checkImageUrl(newProduct.image_url)) {
      errorCode = 404;
      throw new Error(`URL de imagem informada é inválida!`);
    }

    newProduct.id = Date.now().toString();
    await postProduct(newProduct);

    res
      .status(201)
      .send({ message: `Produto ${newProduct.name} criado com sucesso!` });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
