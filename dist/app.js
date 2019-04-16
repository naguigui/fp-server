"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const jwt = __importStar(require("jsonwebtoken"));
const app = express_1.default();
const jwtMiddleWare = (req) => __awaiter(this, void 0, void 0, function* () {
    const token = req.headers.authorization;
    try {
        const { user } = (yield jwt.verify(token, process.env.JWT_SECRET));
        req.user = user;
    }
    catch (e) {
        console.log(e);
    }
    req.next();
});
app.use(jwtMiddleWare);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
exports.default = app;
//# sourceMappingURL=app.js.map