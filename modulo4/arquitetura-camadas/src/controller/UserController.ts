import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInfos, UserLogin } from "../models/User";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password }: UserInfos = req.body;
      const userBusiness = new UserBusiness();
      const user: UserInfos = { name, email, password };

      const data = await userBusiness.signup(user);

      res.status(201).send({ message: "Usuário criado com sucesso!", data });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password }: UserLogin = req.body;
      const userBusiness = new UserBusiness();
      const user: UserLogin = { email, password };
      const token = await userBusiness.login(user);

      res.status(200).send({ message: "Logado com sucesso!", data: { token } });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
