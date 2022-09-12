import { app } from "./app";
import { createProducts } from "./endpoints/createProducts";
import { createUsers } from "./endpoints/createUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { purchases } from "./endpoints/createPurchases";
import { getPurchaseByUser } from "./endpoints/getPurchaseByUser";

app.get(`/users`, getAllUsers);
app.get(`/products`, getAllProducts);
app.get(`/users/:user_id/purchases`, getPurchaseByUser);
app.post(`/users`, createUsers);
app.post(`/products`, createProducts);
app.post(`/purchases`, purchases);
