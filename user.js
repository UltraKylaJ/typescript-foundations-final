"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
class User {
    constructor(userId, username, password, createdDate) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.createdDate = createdDate;
    }
    newId() {
        this.userId = randomstring_1.default.generate({
            length: 4,
            charset: 'alphanumeric'
        });
        return "ID: " + this.userId;
    }
}
// Create a constructor to create the object given the username:
// userID automatically generated using the random library (install and 
//     import the package) and has 4 digits at max
// password is automatically generated using the generatePassword function 
//     (import the function)
// createdDate is automatically generated using the generateDate function 
//     (import the function)
//# sourceMappingURL=user.js.map