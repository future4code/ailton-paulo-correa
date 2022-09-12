import { Request, Response } from "express";
import { selectUserByPage } from "../data/query";
import { user } from "../types";

export const getUserWithPages = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const page = req.query.page;

    if (!page) {
      errorCode = 404;
      throw new Error("Nenhuma página foi informada!");
    }

    const users: user[] = await selectUserByPage(Number(page));

    res.status(200).send({ message: "", data: users });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
