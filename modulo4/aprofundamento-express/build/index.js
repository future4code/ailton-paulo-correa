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
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
app.get("/tasks", (req, res) => {
    res.send(data_1.tasks.filter((item) => item.completed === req.body.completed));
});
app.post("/tasks/create", (req, res) => {
    const { userId, id, title, completed } = req.body;
    data_1.tasks.push({ userId, id, title, completed });
    res.send(data_1.tasks);
});
app.put("/tasks/change/:id", (req, res) => {
    const changedUser = data_1.tasks
        .filter((item) => {
        return req.params.id === item.id.toString();
    })
        .map((item) => {
        return Object.assign(Object.assign({}, item), { completed: !item.completed });
    });
    let responde = {
        allUsers: {
            changedUser: changedUser[0],
            othersUsers: data_1.tasks
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
app.delete("/tasks/delete/:id", (req, res) => {
    res.send(data_1.tasks.filter((item) => {
        return req.params.id !== item.id.toString();
    }));
});
app.get("/tasks/:userId", (req, res) => {
    const selectedUser = data_1.tasks.filter((item) => {
        return req.params.userId === item.userId.toString();
    });
    let response = {
        allUsers: {
            selectedUser: selectedUser[0],
            othersUsers: data_1.tasks.filter((item) => {
                return req.params.userId !== item.userId.toString();
            }),
        },
    };
    res.send(response);
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map