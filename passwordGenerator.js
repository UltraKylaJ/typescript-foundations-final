"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordGenerator = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
function passwordGenerator() {
    randomstring_1.default.generate({
        length: 15,
        charset: 'alphanumeric'
    });
}
exports.passwordGenerator = passwordGenerator;
//# sourceMappingURL=passwordGenerator.js.map