import { Request, Response } from "express";
import { responsibleUser } from "../features/connection";
import { searchIdTask, searchIdUser } from "../features/functions";

export const createResponsibleUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const { taskId, userId }: { taskId: string; userId: string } = req.body;

    if (
      !taskId ||
      !userId ||
      !(await searchIdTask(taskId)) ||
      !(await searchIdUser(userId))
    ) {
      errorCode = 404;
      throw new Error(
        `Alguma informação está inválida. Por favor, revise os valores informados!`
      );
    }

    const result: any = await responsibleUser(userId, taskId);

    res.status(200).send({ message: "Usuário atribuido para uma tarefa!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
