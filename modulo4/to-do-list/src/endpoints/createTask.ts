import { Request, Response } from "express";
import { postTask } from "../features/connection";
import { checkDate, searchIdUser } from "../features/functions";
import { task } from "../features/types";

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 500;
  try {
    const { title, description, limitDate, creatorUserId }: task = req.body;
    let verifyDate: string | string[] = limitDate.split("/");
    verifyDate = `${verifyDate[1]}/${verifyDate[0]}/${verifyDate[2]}`;

    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 404;
      throw new Error(
        `Alguma informação está inválida. Por favor, revise os valores informados!`
      );
    }

    if (!Date.parse(verifyDate) || !checkDate(verifyDate)) {
      errorCode = 404;
      throw new Error(`Data inválida!`);
    }
    const newTask: task = {
      id: Date.now().toString(),
      title,
      description,
      limitDate: new Date(verifyDate)
        .toISOString()
        .slice(0, 10)
        .split("-")
        .join("/"),
      creatorUserId,
    };

    if (!(await searchIdUser(creatorUserId))) {
      errorCode = 404;
      throw new Error(`Usuário não encontrado!`);
    }

    const result = await postTask(newTask);
    if (!!result[0]) {
      errorCode = 500;
      throw new Error(`Erro inesperado foi encontrado!`);
    }

    res.status(200).send({ message: "Tarefa criada com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
