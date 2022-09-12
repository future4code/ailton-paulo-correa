import { Request, Response } from "express";
import { selectUserOrder } from "../data/query";
import { userOrder } from "../types";

export const getUserOrder = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { columnOrder, order }: userOrder = req.query;
    let orderBy: string = columnOrder as string;
    if (orderBy?.toLowerCase() === "type" || orderBy?.toLowerCase() === "tipo")
      orderBy = "type";
    if (orderBy?.toLowerCase() === "name" || orderBy?.toLowerCase() === "nome")
      orderBy = "name";
    if (orderBy?.toLowerCase() !== "type" && orderBy?.toLowerCase() !== "name")
      orderBy = "email";
    const users = await selectUserOrder({ columnOrder:orderBy, order });

    if (!users.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário foi encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: users });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
