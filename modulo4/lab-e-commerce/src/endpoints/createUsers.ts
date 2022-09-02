import { Request, Response } from "express";
import { checkEmail } from "../data/functions";
import { postUser, searchEmail } from "../data/query";
import { user } from "../types";

export const createUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { name, email, password }: user = req.body;
    const newUser: user = { name, email, password };

    Object.keys(newUser).forEach((key): void => {
      if (!newUser[key]) {
        errorCode = 404;
        throw new Error(`O ${key} não foi informado!`);
      }
      if (typeof newUser[key] !== "string") {
        errorCode = 404;
        throw new Error(`O ${key} não é do tipo string!`);
      }
    });

    if (!newUser.email || !checkEmail(newUser.email)) {
      errorCode = 404;
      throw new Error(`Email informado é inválido!`);
    }
    if (await searchEmail(newUser.email)) {
      errorCode = 422;
      throw new Error(`Email informado já está cadastrado!`);
    }

    newUser.id = Date.now().toString();
    await postUser(newUser);

    res
      .status(201)
      .send({ message: `Usuário ${newUser.name} criado com sucesso!` });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
