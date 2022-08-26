import { Request, Response } from "express";
import { getTask } from "../features/connection";
import { searchIdTask } from "../features/functions";
import { task } from "../features/types";

export const getTaskByID = async (
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
    if (!(await searchIdTask(id))) {
      errorCode = 404;
      throw new Error(`Nenhuma tarefa foi encontrada com o ID informado!`);
    }

    const result: task = await getTask(id);
    if (!result) {
      errorCode = 404;
      throw new Error(`Nenhuma tarefa foi encontrado com o ID informado!`);
    }

    res.status(200).send({ message: "Tarefa encontrada!", data: { result } });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
