"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsersController {
    constructor() {
        this.saltRounds = 10;
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.getConnection((err, conn) => {
                    bcrypt_1.default.hash(password, this.saltRounds).then(function (hash) {
                        let query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + hash + "'";
                        conn.query(query, (error, results) => {
                            conn.release();
                            if (error) {
                                reject({
                                    http: 406,
                                    status: 'Failed',
                                    error: error
                                });
                            }
                            if (results.length == 0) {
                                resolve({
                                    http: 204,
                                    status: 'User or passwors is incorrect',
                                });
                            }
                            resolve({
                                http: 200,
                                status: 'Success',
                            });
                        });
                    });
                });
            });
        });
    }
    register(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.getConnection((err, conn) => {
                    bcrypt_1.default.hash(password, this.saltRounds).then(function (hash) {
                        let query = "INSERT INTO users (email, password, name) VALUES ('" + email + "', '" + hash + "', '" + name + "')";
                        conn.query(query, (error, results) => {
                            conn.release();
                            if (error) {
                                reject({
                                    http: 406,
                                    status: 'Failed',
                                    error: error
                                });
                            }
                            resolve({
                                http: 200,
                                status: 'Success',
                            });
                        });
                    });
                });
            });
        });
    }
}
exports.default = new UsersController();
