import express, { Express, Response, Request } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { balance, account, addBalance, transfer } from "./types";
import {
  checkAge,
  checkCPF,
  checkDate,
  checkExistCPF,
  checkTypeNumber,
  checkTypeString,
} from "./functions";
import { accounts } from "../data/mock";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.send(`Serviço funcionando corretamente!`);
});

app.get("/users", (req: Request, res: Response) => {
  try {
    res.send(accounts);
  } catch (error) {
    res.status(500).send({
      message: `Erro no servidor, favor reportar o erro!`,
    });
  }
});

app.get("/users/balance/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const cpf: string = req.params.cpf;

    const resultCheckCPF: boolean = checkCPF(cpf);
    if (!cpf || cpf === ":cpf" || !resultCheckCPF) {
      errorCode = 401;
      throw new Error("CPF informado é inválido!");
    }

    const resultCheckExistCPF: boolean = checkExistCPF(cpf);
    if (resultCheckExistCPF) {
      errorCode = 401;
      throw new Error("CPF não encontrado no sistema!");
    }

    const getBalance: (balance | undefined)[] = accounts
      .filter(
        (item) =>
          item.cpf.replace("-", ".").split(".").join("") ===
          cpf.replace("-", ".").split(".").join("")
      )
      .map((item) => item.balance);

    res.send(getBalance[0]);
  } catch (error: any) {
    res.status(errorCode).send({
      message:
        errorCode !== 500
          ? error.message
          : `Erro no servidor, favor reportar o erro!`,
    });
  }
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

    const resultCheckCPF: boolean = checkCPF(cpf);
    if (!resultCheckCPF) {
      errorCode = 401;
      throw new Error("CPF informado é inválido!");
    }

    const resultCheckExistCPF: boolean = checkExistCPF(cpf);
    if (!resultCheckExistCPF) {
      errorCode = 401;
      throw new Error("CPF já cadastrado!");
    }

    const newBalance: balance = {
      dateUpdate: currentYear,
      value: 0,
    };

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

app.put("/users/addbalance", (req: Request, res: Response) => {
  let errorCode: number = 500;
  try {
    const { name, cpf, newValue }: addBalance = req.body;

    if (!name || !cpf || !newValue) {
      errorCode = 422;
      throw new Error("Algum valor não foi informado!");
    }

    if (!checkTypeString([name, cpf]) || !checkTypeNumber([newValue])) {
      errorCode = 422;
      throw new Error("Erro com o tipo de um ou mais valores informado!");
    }

    const resultCheckCPF: boolean = checkCPF(cpf);
    if (!cpf || cpf === ":cpf" || !resultCheckCPF) {
      errorCode = 422;
      throw new Error("CPF informado é inválido!");
    }

    const existName = accounts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!existName) {
      errorCode = 422;
      throw new Error("Nome informado é inválido!");
    }
    console.log(existName);

    const resultCheckExistCPF: boolean = checkExistCPF(cpf);
    if (resultCheckExistCPF) {
      errorCode = 401;
      throw new Error("CPF não encontrado no sistema!");
    }

    let editUser: account[] = accounts.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    const newBalance: balance = {
      dateUpdate: new Date().toISOString().slice(0, 10),
      value: (editUser[0].balance?.value || 0) + newValue,
    };
    const newExcerpt: transfer = {
      id: Date.now(),
      cpfSender: cpf,
      nameSender: name,
      value: newValue,
      description: `Depósito de dinheiro`,
    };
    editUser[0].balance = newBalance;
    editUser[0].historyTransfer?.push(newExcerpt);

    const updateAccounts: account[] = accounts.map((item) => {
      if (
        item.cpf.replace("-", ".").split(".").join("") ===
        cpf.replace("-", ".").split(".").join("")
      ) {
        return editUser[0];
      } else return item;
    });

    res.send(updateAccounts);
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
