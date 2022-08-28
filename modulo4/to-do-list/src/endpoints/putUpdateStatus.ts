import { Request, Response } from "express";
import { updateStatus } from "../features/connection";

export const putUpdateStatus = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const id: string = req.params.id;
    const { status } = req.body;

    if (!id || id === ":id") {
      errorCode = 404;
      throw new Error(`Nenhum ID foi informado!`);
    }

    if (!status) {
      errorCode = 404;
      throw new Error(`Não foi informado qual novo status deseja atualizar!`);
    }

    const result = await updateStatus(id, status);

    res.status(200).send({ message: "Tarefa atualizada com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
