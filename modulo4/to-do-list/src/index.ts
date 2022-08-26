import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});
const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, nickname, email }: user = req.body;
    if (!name || !nickname || !email) {
      errorCode = 404;
      throw new Error(
        `Alguma informação está inválida. Por favor, revise os valores informados!`
      );
    }

    const newUser: user = {
      id: Date.now().toString(),
      name,
      nickname,
      email,
    };

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
