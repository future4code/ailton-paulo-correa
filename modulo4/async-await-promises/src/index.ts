import express, { Express } from "express";
import { BASE_URL } from "./data/BASE_URL";
import cors from "cors";
import { AddressInfo } from "net";
import axios from "axios";
import { data, news, user } from "./data/type";

const app: Express = express();
app.use(express.json());
app.use(cors());

// EXE 1
async function getSubscribers(): Promise<any> {
  try {
    const { data }: data = await axios.get(`${BASE_URL}/subscribers`);
    return data;
  } catch (error: any) {
    return [{ message: error.message }];
  }
}

// EXE 2
const getSubs = async (): Promise<any[]> => {
  try {
    const { data }: data = await axios.get(`${BASE_URL}/subscribers`);
    return data;
  } catch (error: any) {
    return [{ message: error.message }];
  }
};

// EXE 3
const getSubscribersEx3 = async (): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

// EXE 4
const createNews = async ({ title, content, date }: news): Promise<void> => {
  try {
    console.log({ title, content, date });
    await axios.put(`${BASE_URL}/news`, { title, content, date });
  } catch (error: any) {
    console.log([{ message: error.message }]);
  }
};

// EXE 5
const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    for (const user of users) {
      await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message,
      });
      console.log(`Foi para ${user.name}!`);
    }

    console.log("Foi enviado para trodos!");
  } catch (error: any) {
    console.log({ message: error.message });
  }
};

// EXE 6
const sendNotificationsEx6 = async (
  users: user[],
  message: string
): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message: message,
      });
    });

    await Promise.all(promises);
    console.log(promises);
  } catch {
    console.log("Error");
  }
};

// Desafio
const challenge = async (): Promise<void> => {
  const teste1: string = "ops";
  const teste2: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Oi");
  });
  const teste3: string = 'depois do "Teste"';
  console.log(teste1);
  Promise.all([teste1, teste2, teste3]).then((item) =>
    console.table({ Testes: item })
  );
  console.log(teste3);
};

const main = async () => {
  // EXE 1
  // A) Get com BASE URL + /subscribers
  // B) Promise<any[]>
  const res: user[] = await getSubscribers();
  console.log(res);
  //
  // EXE 2
  const res2: any = await getSubs();
  console.log(res2);
  //
  // EXE 3
  // A) Devemos válidar o que está vindo com um mapeamento ou dando uma tipagem para a variável que irá receber os valores da requisição, como se estivessemos confirmando o que irá ser armazenado nela.
  // B) É boa prática para que não seja enviado valores indesejáveis.
  const res3: user[] = await getSubscribersEx3();
  console.log(res3);
  //
  // EXE 4
  // A) Void, pois a requisição não retorna valores!
  await createNews({
    title: "title",
    content: "content",
    date: 2022,
  });
  //
  // EXE 5
  await sendNotifications(res, "Seja bem vindoooooo!");
  //
  // EXE 6
  // Resolve todas as promises encontradas em seu argumento, similar ao que await faz, mas pelo que entendi nessa situação temos varias promises sendo feitas em map, onde não se é capaz de utilizar o await.
  await sendNotificationsEx6(res, "Seja bem vindoooooo!");

  // Para testar individualmente cada exercicio basta comentar as linhas que não deseja executar para não poluir o chat e também certifique que o main esteja sendo executado na linha 129.

  // Desafio
  await challenge();
};

// main();
// Descomente a linha 129 para executar todas funções

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
