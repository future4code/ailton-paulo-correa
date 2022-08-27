import { Request, Response } from "express";
import { allUserNick } from "../features/connection";
import { getUser } from "../features/types";

export const getAllUserNick = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const result: getUser[] = await allUserNick();
    res.status(200).send({
      message: "Usuários encontrados no banco de dados!",
      data: result,
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
