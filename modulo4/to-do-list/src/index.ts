import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { postCreateUser } from "./endpoints/createUser";
import { getUserByID } from "./endpoints/getUserByID";
import { editUser } from "./endpoints/editUser";
import { createTask } from "./endpoints/createTask";
import { getTaskByID } from "./endpoints/getTaskByID";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", postCreateUser);
app.get("/user/:id", getUserByID);
app.put("/user/edit/:id", editUser);
app.post("/task", createTask);
app.get("/task/:id", getTaskByID);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
