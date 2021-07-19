"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recursiveFlatten_1 = __importDefault(require("./recursiveFlatten"));
function main() {
    const data = [1, [2, 3, [4, 5], 6], 7, [8, 9, [[10]]]];
    const flattened = recursiveFlatten_1.default(data);
    console.log(`flattened = [${flattened}]`);
    // output>>> flattened = [1,2,3,4,5,6,7,8,9,10]
}
main();
//# sourceMappingURL=index.js.map