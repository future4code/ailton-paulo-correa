import { Request, Response } from "express";
import { createAddress } from "../data/query";
import { searchCEP } from "../data/request";
import { address, body } from "../types";

export const postAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { cep, number, complement }: body = req.body;
    if (!cep) {
      errorCode = 404;
      throw new Error("Nenhum CEP foi informado!");
    }
    if (!number) {
      errorCode = 404;
      throw new Error("Número não foi informado!");
    }

    const result: address = await searchCEP(cep);
    if (!result) {
      errorCode = 404;
      throw new Error("Não foi encontrado um endereço com o CEP informado!");
    }
    const addressUser: address = {
      id: Date.now().toString(),
      ...result,
      number: String(number),
      complement: complement || "",
    };
    const add: address = await createAddress(addressUser);
    res.status(200).send({ message: "Endereço criado com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
