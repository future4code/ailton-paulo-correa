import { Request, Response } from "express";
import {
  getTask,
  getUserId,
  getUserResponsibleTask,
} from "../features/connection";
import { searchIdTask } from "../features/functions";
import { getUser, task, taskResponsibles } from "../features/types";

export const getUserRespTaskPlus = async (req: Request, res: Response) => {
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
    let task: task = await getTask(id);
    const creatorUserNickname: string = task.nickname as string;
    delete task.nickname;
    const users: getUser[] = await getUserResponsibleTask(id);
    let result: taskResponsibles = {
      ...task,
      creatorUserNickname,
      responsibleUsers: users,
    };

    console.log(result);

    res.status(200).send({
      message: "Usuários responsáveis por essa tarefa encontrados!",
      data: result,
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
