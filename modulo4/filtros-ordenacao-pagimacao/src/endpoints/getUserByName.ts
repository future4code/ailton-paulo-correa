import { Request, Response } from "express";
import { selectUserByName } from "../data/query";
import { user } from "../types";

export const getUserByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 500;
  try {
    const name: string = req.query.name as string;
    if (!name) {
      errorCode = 404;
      throw new Error("Nenhum nome foi informado!");
    }

    const user: user[] = await selectUserByName(name);
    if (!user.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: user });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
