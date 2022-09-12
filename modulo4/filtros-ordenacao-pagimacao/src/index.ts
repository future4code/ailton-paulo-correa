import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getUsersAllFilters } from "./endpoints/getUsersAllFilters";
import { getUserOrder } from "./endpoints/getUsersOrder";
import { getUserWithPages } from "./endpoints/getUserWithPages";

app.get("/user/all", getAllUsers); // Enunciado
app.get("/user/search", getUserOrder); // EXE 2
app.get("/user/page", getUserWithPages); // EXE 3
app.get("/user/page/search", getUsersAllFilters); // EXE 4
app.get("/user", getUserByName); // EXE 1 A
app.get("/user/:type", getUserByType); // EXE 1 B
