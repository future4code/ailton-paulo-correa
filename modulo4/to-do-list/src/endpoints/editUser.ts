import { Request, Response } from "express";
import { putUser } from "../features/connection";
import { editBody } from "../features/types";

export const editUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 500;
  try {
    const id = req.params.id;
    const { name, nickname }: editBody = req.body;
    if (!id || id === ":id") {
      errorCode = 404;
      throw new Error(`Nenhum ID foi informado!`);
    }

    if (!name && !nickname) {
      errorCode = 404;
      throw new Error(`Nenhum valor informado para editar!`);
    }
    const result = await putUser(id, name, nickname);
    console.log(result);

    res.status(200).send({ message: "Usuário editado com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
