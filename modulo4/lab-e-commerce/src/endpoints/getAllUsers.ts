import { Request, Response } from "express";
import { allUsers } from "../data/query";
import { user } from "../types";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const users: user[] = await allUsers();
    
    res
      .status(200)
      .send({ message: "Listagem de todos os usuários!", data: { users } });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
