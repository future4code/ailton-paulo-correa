import express, { Express, Response, Request } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {
  balance,
  account,
  getBalance,
  addBalance,
  payType,
  transfer,
} from "./types";
import { checkAge, checkDate } from "./functions";
import { accounts } from "../data/mock";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  const currentYear = new Date("11/10/1995").toISOString().slice(0, 10);
  res.send(`Serviço funcionando corretamente! ${currentYear}`);
});

app.get("/users", (req: Request, res: Response) => {
  res.send("Não criado");
});

app.post("/users/create", (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const { name, cpf, birthdate }: account = req.body;

    if (!Date.parse(birthdate) || !checkDate(birthdate)) {
      errorCode = 422;
      throw new Error("Data informada é inválida!");
    }

    const currentYear: string = new Date().toISOString().slice(0, 10);
    const convertBirthdate: string = new Date(birthdate)
      .toISOString()
      .slice(0, 10);
    const resultCheck: boolean = checkAge(currentYear, convertBirthdate);

    if (!resultCheck) {
      errorCode = 401;
      throw new Error("Usuário não tem 18 anos completos!");
    }

    const newBalance: balance = {
      description: `Cliente ${name} criou sua conta na data ${currentYear}`,
      date: currentYear,
      value: 0,
    };

    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF
    // FALTA VALIDA CPF

    accounts.push({
      id: Date.now(),
      name,
      cpf,
      birthdate,
      balance: newBalance,
      historyTransfer: [],
    });

    res.send(accounts);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor está executando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o servidor.`);
  }
});
