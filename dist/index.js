"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const graphServer_1 = __importDefault(require("./app/graphql/graphServer"));
require('./db/mongoose');
graphServer_1.default.applyMiddleware({ app: app_1.default });
app_1.default.listen({ port: 3000 });
//# sourceMappingURL=index.js.map