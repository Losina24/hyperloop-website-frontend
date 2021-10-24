"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.login = () => this.router.post('/login', (req, res) => {
            const email = req.body.email;
            const pass = req.body.password;
            usersController_1.default.login(email, pass)
                .then(response => {
                res.send(response);
            })
                .catch(err => {
                res.send(err);
            });
        });
        this.register = () => this.router.post('/register', (req, res) => {
            const email = req.body.email;
            const pass = req.body.password;
            const name = req.body.name;
            usersController_1.default.register(email, pass, name)
                .then(response => {
                res.send(response);
            })
                .catch(err => {
                res.send(err);
            });
        });
        this.login();
        this.register();
    }
}
const userRouter = new UsersRouter();
exports.default = userRouter.router;
