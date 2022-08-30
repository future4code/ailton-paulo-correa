import { Request, Response } from "express";
import { selectUserOrder } from "../data/query";
import { userOrder } from "../types";

export const getUserOrder = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, type, order }: userOrder = req.query;
    const users = await selectUserOrder({ name, type, order });

    if (!users.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário foi encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: users });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
