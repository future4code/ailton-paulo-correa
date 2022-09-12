import { Request, Response } from "express";
import { selectUserByType } from "../data/query";
import { user } from "../types";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 500;
  try {
    const type: string = req.params.type as string;
    if (!type) {
      errorCode = 404;
      throw new Error("Nenhum nome foi informado!");
    }

    const user: user[] = await selectUserByType(type);
    if (!user.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: user });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
