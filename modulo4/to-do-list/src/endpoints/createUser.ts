import { Request, Response } from "express";
import { createUser } from "../features/connection";
import {
  checkEmail,
  checkFreeEmail,
  checkFreeNickname,
} from "../features/functions";
import { user } from "../features/types";

export const postCreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { name, nickname, email }: user = req.body;
    if (!name || !nickname || !email) {
      errorCode = 404;
      throw new Error(
        `Alguma informação está inválida. Por favor, revise os valores informados!`
      );
    }

    if (checkEmail(email)) {
      errorCode = 422;
      throw new Error(`Email informado é inválido!`);
    }
    if (await checkFreeEmail(email)) {
      errorCode = 422;
      throw new Error(`Email informado já foi cadastrado!`);
    }
    if (await checkFreeNickname(nickname)) {
      errorCode = 422;
      throw new Error(`Nickname informado já foi cadastrado!`);
    }

    const id: string = Date.now().toString();
    const newUser: user = {
      id,
      name,
      nickname,
      email,
    };

    const result: any = await createUser(newUser);
    if (!!result[0]) {
      errorCode = 500;
      throw new Error(`Erro inesperado foi encontrado!`);
    }

    res
      .status(201)
      .send({ message: `Usuário criado com sucesso!`, data: newUser });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
