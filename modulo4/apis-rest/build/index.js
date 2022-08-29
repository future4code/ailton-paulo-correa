"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/users", (req, res) => {
    let errorCode = 500;
    try {
        const search = req.query.search || "";
        const searchType = req.query.type.toUpperCase() || "";
        if (searchType && searchType !== "NORMAL" && searchType !== "ADMIN") {
            errorCode = 404;
            throw new Error("Tipo não existente!");
        }
        const filterUsers = data_1.users.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) &&
            item.type.toUpperCase().includes(searchType));
        res.send(filterUsers);
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
app.post("/users/create", (req, res) => {
    let errorCode = 500;
    try {
        const { id, name, email, type, age } = req.body;
        if (!id || !name || !email || !type || !age) {
            errorCode = 404;
            throw new Error("Erro com os valores informados!");
        }
        if (!data_1.UserType[type]) {
            errorCode = 404;
            throw new Error("Tipo não existente!");
        }
        data_1.users.push({ id, name, email, type, age });
        res.send(data_1.users);
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map