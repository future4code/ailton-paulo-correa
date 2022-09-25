import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const user = { name, email, password };
      const data = await this.userBusiness.signup(user);

      res.status(201).send({ message: "Usuário criado com sucesso!", data });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
