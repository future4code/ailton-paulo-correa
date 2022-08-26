import { Request, Response } from "express";
import { getUser } from "../features/connection";
import { user } from "../features/types";

export const getUserByID = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const id: string = req.params.id;
    if (!id || id === ":id") {
      errorCode = 404;
      throw new Error(`Nenhum ID foi informado!`);
    }

    const result: user = await getUser(id);
    if (!result) {
      errorCode = 404;
      throw new Error(`Nenhum usuário foi encontrado com o ID informado!`);
    }

    const { nickname } = result;
    res
      .status(200)
      .send({ message: "Usuário encontrado!", data: { id, nickname } });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
