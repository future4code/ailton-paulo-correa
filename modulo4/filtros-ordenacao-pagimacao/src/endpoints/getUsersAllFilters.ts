import { Request, Response } from "express";
import { selectUserAllFilters } from "../data/query";
import { allFilters, user } from "../types";

export const getUsersAllFilters = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, type, order, page }: allFilters = req.query;

    const users: user[] = await selectUserAllFilters({
      name,
      type,
      order,
      page,
    });

    if (!users.length) {
      errorCode = 404;
      throw new Error("Nenhum usuários encontrado!");
    }

    res.status(200).send({ message: "Usuários encontrados!", data: users });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
