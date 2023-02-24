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
const trool_1 = __importDefault(require("trool"));
const jet_logger_1 = __importDefault(require("jet-logger"));
console.log("hello");
const csvFilePath = './testRulesEngine.csv';
const factsHolder = {
    option: "REGULAR",
};
// const importsHolder = { 
//     TicketTypes: {
//         REGULAR: 'REGULAR',
//         SEASON: 'SEASON',
//     },
// };
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const engine = yield (0, trool_1.default)(csvFilePath);
        const updatedFacts = engine.applyRules(factsHolder);
        console.log(updatedFacts);
        jet_logger_1.default.info(engine.decisionTables);
    }
    catch (err) {
        console.log(err);
        jet_logger_1.default.err(err.message);
    }
}))();
//# sourceMappingURL=app.js.map