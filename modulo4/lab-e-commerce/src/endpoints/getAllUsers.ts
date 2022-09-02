import { Request, Response } from "express";
import { allUsers, purchasesUser } from "../data/query";
import { user, userAllPurchases } from "../types";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 500;
  try {
    const users: user[] = await allUsers();
    const promises: any = users.map((u) => purchasesUser(u.id as string));
    const purchases = await Promise.all(promises);
    let usersAllPurchases: userAllPurchases[] = [];

    for (let i = 0; i < users.length; i++)
      usersAllPurchases.push({ ...users[i], purchases: purchases[i] });

    res.status(200).send({
      message: "Listagem de todos os usuários!",
      data: { users: usersAllPurchases },
    });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
