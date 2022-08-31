import { app } from "./app";
import { postAddress } from "./endpoints/postAddress";

app.post(`/address`,postAddress)