import express from "express";
import cors from "cors";
import { users, user, post, posts } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

app.get("/", (req, res): void => {
  res.send("Hello from Express");
});

app.get("/users", (req, res): void => {
  res.send(users);
});

app.get("/posts", (req, res): void => {
  res.send(posts);
  // acredito ser melhor separado, no caso de querer pesquisar separadamente os posts ficaria mais pratico
});

app.get("/posts/:userId", (req, res): void => {
  const userId: number = Number(req.params.userId);
  res.send(
    posts.filter((item: post) => {
      return item.userId === userId;
    })
  );
});

app.delete("/posts/:id", (req, res): void => {
  const id: number = Number(req.params.id);
  res.send(
    posts.filter((item: post) => {
      return item.id !== id;
    })
  );
});

app.delete("/users/:id", (req, res): void => {
  const id: number = Number(req.params.id);
  res.send(
    users.filter((item: user) => {
      return item.id !== id;
    })
  );
});
