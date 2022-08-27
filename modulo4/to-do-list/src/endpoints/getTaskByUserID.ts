import { Request, Response } from "express";
import { taskByUserID } from "../features/connection";
import { searchUserIdTask } from "../features/functions";
import { resultTasks } from "../features/types";

export const getTaskByUserID = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const userId: string = req.query.creatorUserId as string;
    if (!userId) {
      errorCode = 404;
      throw new Error(
        "Não foi informado um ID de usuário para ser pesquisado!"
      );
    }

    if (!(await searchUserIdTask(userId))) {
      errorCode = 404;
      throw new Error("Usuário nunca criou uma tarefa!");
    }

    const result = await taskByUserID(userId);

    let newResult: resultTasks[] = result;
    for (let i = 0; i < newResult.length; i++) {
      const convertDate = newResult[i].limitDate.split("/");
      newResult[
        i
      ].limitDate = `${convertDate[2]}/${convertDate[1]}/${convertDate[0]}`;
    }

    res.status(200).send({
      message: "Tarefas do Usúario foram encontradas!",
      data: newResult,
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
