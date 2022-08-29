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
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
app.get("/", (req, res) => {
    res.send("Hello from Express");
});
app.get("/users", (req, res) => {
    res.send(data_1.users);
});
app.get("/posts", (req, res) => {
    res.send(data_1.posts);
});
app.get("/posts/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    res.send(data_1.posts.filter((item) => {
        return item.userId === userId;
    }));
});
app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);
    res.send(data_1.posts.filter((item) => {
        return item.id !== id;
    }));
});
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    res.send(data_1.users.filter((item) => {
        return item.id !== id;
    }));
});
//# sourceMappingURL=index.js.map