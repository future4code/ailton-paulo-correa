import { Request, Response } from "express";
import { userByNickname } from "../features/connection";
import { getUser } from "../features/types";

export const getUserByNickname = async (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const nickname: string = req.query.query as string;

    if (!nickname) {
      errorCode = 404;
      throw new Error("Nenhum nickname foi informado para ser pesquisado!");
    }

    const result: getUser[] = await userByNickname(nickname);

    res.status(200).send({
      message: result.length
        ? "Usuários encontrados!"
        : "Nenhum usuário foi encontrado!",
      data: result,
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
