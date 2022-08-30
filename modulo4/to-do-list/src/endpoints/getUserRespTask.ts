import { Request, Response } from "express";
import { getUserResponsibleTask } from "../features/connection";
import { searchIdTask } from "../features/functions";
import { getUser } from "../features/types";

export const getUserRespTask = async (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const id: string = req.params.id;

    if (!id || id === ":id") {
      errorCode = 404;
      throw new Error("Nenhum ID foi informado!");
    }

    if (!(await searchIdTask(id))) {
      errorCode = 404;
      throw new Error("Nenhum tarefa encontrada com o ID informado!");
    }

    const users: getUser[] = await getUserResponsibleTask(id)

    res.status(200).send({ message: "Usuários responsáveis por essa tarefa encontrados!", data: users });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
