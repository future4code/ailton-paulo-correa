import express, { Request, Response } from "express";
import cors from "cors";
import { users, user, UserType } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const search: string = (req.query.search as string) || "";
    const searchType: string = (req.query.type as string).toUpperCase() || "";

    if (searchType && searchType !== "NORMAL" && searchType !== "ADMIN") {
      errorCode = 404;
      throw new Error("Tipo não existente!");
    }

    const filterUsers = users.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.type.toUpperCase().includes(searchType)
    );

    res.send(filterUsers);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users/create", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { id, name, email, type, age }: user = req.body;
    if (!id || !name || !email || !type || !age) {
      errorCode = 404;
      throw new Error("Erro com os valores informados!");
    }
    if (!UserType[type]) {
      errorCode = 404;
      throw new Error("Tipo não existente!");
    }
    users.push({ id, name, email, type, age });
    res.send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

//Hoje deu preguiça, sem desafios!
