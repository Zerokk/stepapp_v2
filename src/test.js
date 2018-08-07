"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hi {
    constructor(property) {
        this.property = property;
    }
}
exports.Hi = Hi;
const hi = new Hi("hi, test");
console.log("Result: ", hi.property);
