import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
  checkEmail,
  checkFreeEmail,
  checkFreeNickname,
} from "./features/functions";
import { user } from "./features/types";
import { createUser, getAllUsers } from "./features/connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, nickname, email }: user = req.body;
    if (!name || !nickname || !email) {
      errorCode = 404;
      throw new Error(
        `Alguma informação está inválida. Por favor, revise os valores informados!`
      );
    }

    if (checkEmail(email)) {
      errorCode = 422;
      throw new Error(`Email informado é inválido!`);
    }
    if (await checkFreeEmail(email)) {
      errorCode = 422;
      throw new Error(`Email informado já foi cadastrado!`);
    }
    if (await checkFreeNickname(nickname)) {
      errorCode = 422;
      throw new Error(`Nickname informado já foi cadastrado!`);
    }

    const id: string = Date.now().toString();
    const newUser: user = {
      id,
      name,
      nickname,
      email,
    };

    const result = await createUser(newUser);
    console.log("aaa",result);

    if (!!result[0]) {
      errorCode = 500;
      throw new Error(`Erro inesperado foi encontrado!`);
    }

    res
      .status(201)
      .send({ message: `Usuário criado com sucesso!`, data: newUser });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
