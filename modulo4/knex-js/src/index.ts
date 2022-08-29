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

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}';
  `);

  return result[0][0];
};
// Exe 1
// a)
// A resposta retorna todos os valores de uma pessoa, cujo foi informado o ID, caso o ID não exista, nada será retornado.

// b)
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
      `);
  return result[0][0];
};

// c)
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  return result[0][0].count;
};

// Exe 2
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id,
      name,
      salary,
      birth_date: dateOfBirth,
      gender,
    })
    .into("Actor");
};

// a)
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// b)
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

// c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });
  return result[0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("004")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("004"));
})();

// Exe 1
// b)
(async () => {
  console.log(await searchActor("Glória Pires"));
})();

// c)
(async () => {
  console.log(await countActors("male"));
})();

// Exe 2
// Chamada teste para criar um novo dado.
// (async () => {
//   await createActor(
//     Date.now().toString(),
//     "Paulo",
//     10,
//     new Date("1995-10-11"),
//     "male"
//   );
// })();

// a)
// (async () => {
//   await updateActor("1661360901513", 100);
// })();

// b)
// (async () => {
//   await deleteActor("1661361455769");
// })();

// c)
// (async () => {
//   console.table(await avgSalary("male"));
// })();

// Bacana as duas formas de testar conexão com o DB, da linha 34~45

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

// Exe 3
// a)
app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const actor: string = await getActorById(id);

    res.status(200).send(actor);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      quantity: await countActors(req.query.gender as string),
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// Exe 4
type actor = {
  id: string;
  name: string;
  salary: number;
  dateOfBirth: string;
  gender: string;
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    const { id, name, salary, dateOfBirth, gender }: actor = req.body;
    await createActor(id, name, salary, new Date(dateOfBirth), gender);

    res.status(200).send();
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// a)

type editSalary = {
  id: string;
  salary: number;
};

app.put("/actor", async (req: Request, res: Response) => {
  try {
    const { id, salary }: editSalary = req.body;
    await updateActor(id, salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
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
