import { Request, Response } from "express";
import { purchasesUser, searchIdUser } from "../data/query";

export const getPurchaseByUser = async (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const user_id: string = req.params.user_id;
    if (!user_id || user_id === ":user_id") {
      errorCode = 404;
      throw new Error(`Nenhum ID foi informado!`);
    }

    if (!(await searchIdUser(user_id))) {
      errorCode = 404;
      throw new Error(`O ID informado não existe no banco de dados!`);
    }

    const purchases = await purchasesUser(user_id);
    res
      .status(200)
      .send({
        message: "Lista de compras do usuário informado!",
        data: { purchases },
      });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
