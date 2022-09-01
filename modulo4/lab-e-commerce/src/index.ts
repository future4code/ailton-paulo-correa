import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get(`/users`, getAllUsers);
app.post(`/users`, createUsers);

console.log(
  /\.(jpg|jpeg|png|webp|avif|gif|svg)/.test("http://localhost:3003/users")
);
console.log(/^[a-z0-9.]+@[a-z0-9]+\.[a-z.]+?$/i.test("gabriel@email.com.br"));
