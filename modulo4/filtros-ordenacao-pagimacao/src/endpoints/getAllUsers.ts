import { Request, Response } from "express";
import { user } from "../types";
import { selectAllUsers } from "../data/query";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 500;
  try {
    const users:user[] = await selectAllUsers();
    if (!users.length) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: users });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
