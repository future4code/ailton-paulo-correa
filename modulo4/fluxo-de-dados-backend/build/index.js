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
app.get("/test", (req, res) => {
    res.send("API funcionando corretamente!");
});
app.post("/products/create", (req, res) => {
    try {
        const { name, price } = req.body;
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
        data_1.products.push({ id: Date.now().toString(), name, price });
        res.send(data_1.products);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.get("/products", (req, res) => {
    var _a;
    try {
        let search = "";
        if (req.query.search === undefined) {
            search = "";
        }
        else {
            search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        }
        res.send(data_1.products.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        }));
    }
    catch (error) { }
});
app.put("/products/edit/:id", (req, res) => {
    try {
        const { name, price } = req.body;
        const id = req.params.id;
        const existID = data_1.products.find((item) => {
            return item.id === id;
        });
        if (!id || id === ":id" || !existID) {
            res.statusCode = 404;
            throw new Error("ID do produto a ser alterado não foi informado ou não existe!");
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
        const updateProducts = data_1.products.map((item) => {
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
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.delete("/products/delete/:id", (req, res) => {
    try {
        const id = req.params.id;
        const existID = data_1.products.find((item) => {
            return item.id === id;
        });
        if (!id || id === ":id" || !existID) {
            res.statusCode = 404;
            throw new Error("ID do produto a ser alterado não foi informado ou não existe!");
        }
        res.send(data_1.products.filter((item) => {
            return item.id !== id;
        }));
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map