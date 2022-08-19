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
import { checkAge, checkCPF, checkDate, checkTypeString } from "./functions";
import { accounts } from "../data/mock";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.send(`Serviço funcionando corretamente!`);
});

app.get("/users", (req: Request, res: Response) => {
  res.send("Não criado");
});

app.post("/users/create", (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const { name, cpf, birthdate }: account = req.body;

    if (!name || !cpf || !birthdate) {
      errorCode = 422;
      throw new Error("Algum valor não foi informado!");
    }

    if (!checkTypeString([name, cpf, birthdate])) {
      errorCode = 422;
      throw new Error("Erro com o tipo de um ou mais valores informado!");
    }

    // A DATA DE ENTRADA DEVE ESTAR NO FORMATO MM/DD/AAAA

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

    const resultCheckCPF: boolean = checkCPF(cpf);
    if (!resultCheckCPF) {
      errorCode = 401;
      throw new Error("CPF informado é inválido!");
    }

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
    res.status(errorCode).send({
      message:
        errorCode !== 500
          ? error.message
          : `Erro no servidor, favor reportar o erro!`,
    });
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
