import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { tasks, task } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

app.get("/tasks", (req: Request, res: Response) => {
  res.send(tasks.filter((item) => item.completed === req.body.completed));
});

app.post("/tasks/create", (req: Request, res: Response) => {
  const { userId, id, title, completed }: task = req.body;
  tasks.push({ userId, id, title, completed });
  res.send(tasks);
});

app.put("/tasks/change/:id", (req: Request, res: Response) => {
  type responseType = {
    allUsers: {
      changedUser: task;
      othersUsers: task[];
    };
  };
  const changedUser: task[] = tasks
    .filter((item) => {
      return req.params.id === item.id.toString();
    })
    .map((item) => {
      return { ...item, completed: !item.completed };
    });
  let responde: responseType = {
    allUsers: {
      changedUser: changedUser[0],
      othersUsers: tasks
        .filter((item) => {
          return req.params.id !== item.id.toString();
        })
        .map((item) => {
          return item;
        }),
    },
  };
  res.send(responde);
});

app.delete("/tasks/delete/:id", (req: Request, res: Response) => {
  res.send(
    tasks.filter((item) => {
      return req.params.id !== item.id.toString();
    })
  );
});

app.get("/tasks/:userId", (req: Request, res: Response) => {
  type responseType = {
    allUsers: {
      selectedUser: task;
      othersUsers: task[];
    };
  };
  const selectedUser: task[] = tasks.filter((item) => {
    return req.params.userId === item.userId.toString();
  });
  let response: responseType = {
    allUsers: {
      selectedUser: selectedUser[0],
      othersUsers: tasks.filter((item) => {
        return req.params.userId !== item.userId.toString();
      }),
    },
  };
  res.send(response);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
