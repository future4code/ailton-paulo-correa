import express, { Request, Response } from "express";
import cors from "cors";
import { products, product, receiveProduct } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.send("API funcionando corretamente!");
});

app.post("/products/create", (req: Request, res: Response) => {
  try {
    const { name, price }: receiveProduct = req.body;

    if (!name || !price) {
      res.statusCode = 401;
      throw new Error("Valores vazios ou não enviados corretamente!");
    }

    if (price <= 0) {
      res.statusCode = 401;
      throw new Error("Valores vazios ou não enviados corretamente!");
    }

    if (typeof name !== "string") {
      res.statusCode = 400;
      throw new Error("O nome informado não é uma 'string'!");
    }

    if (typeof price !== "number") {
      res.statusCode = 400;
      throw new Error("O preço informado não é um 'number'!");
    }

    products.push({ id: Date.now().toString(), name, price });
    res.send(products);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.get("/products", (req: Request, res: Response) => {
  try {
    let search: string = "";
    if (req.query.search === undefined) {
      search = "";
    } else {
      search = req.query.search?.toString();
    }
    res.send(
      products.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  } catch (error) {}
});

app.put("/products/edit/:id", (req: Request, res: Response) => {
  try {
    const { name, price }: receiveProduct = req.body;
    const id: string = req.params.id;
    const existID: product | undefined = products.find((item) => {
      return item.id === id;
    });

    if (!id || id === ":id" || !existID) {
      res.statusCode = 404;
      throw new Error(
        "ID do produto a ser alterado não foi informado ou não existe!"
      );
    }

    if (!name || !price) {
      res.statusCode = 401;
      throw new Error("Valores vazios ou não enviados corretamente!");
    }

    if (price <= 0) {
      res.statusCode = 401;
      throw new Error("Valor do preço é inválido!");
    }

    if (typeof name !== "string") {
      res.statusCode = 400;
      throw new Error("O nome informado não é uma 'string'!");
    }

    if (typeof price !== "number") {
      res.statusCode = 400;
      throw new Error("O preço informado não é um 'number'!");
    }

    const updateProducts: product[] = products.map((item) => {
      if (id === item.id) {
        return {
          id,
          name: name ? name : item.name,
          price: price ? price : item.price,
        };
      }
      return item;
    });
    res.send(updateProducts);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.delete("/products/delete/:id", (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const existID: product | undefined = products.find((item) => {
      return item.id === id;
    });

    if (!id || id === ":id" || !existID) {
      res.statusCode = 404;
      throw new Error(
        "ID do produto a ser alterado não foi informado ou não existe!"
      );
    }
    res.send(
      products.filter((item) => {
        return item.id !== id;
      })
    );
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
