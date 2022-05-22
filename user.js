"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
const passwordGenerator_1 = require("./passwordGenerator");
const dateMaker_1 = require("./dateMaker");
class User {
    constructor(userId, username, password, createdDate) {
        this.userId = randomstring_1.default.generate({
            length: 4,
            charset: 'alphanumeric'
        });
        this.username = username;
        this.password = (0, passwordGenerator_1.passwordGenerator)();
        this.createdDate = (0, dateMaker_1.generateDate)();
    }
    prettyPrint() {
        console.log(`ID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}`);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map