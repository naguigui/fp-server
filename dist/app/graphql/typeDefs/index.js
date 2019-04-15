"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const user_1 = __importDefault(require("./user"));
const RootTypeDef = apollo_server_express_1.gql `
	type Query
	type Mutation
	schema {
		query: Query
		mutation: Mutation
	}
`;
exports.typeDefs = [RootTypeDef, user_1.default];
//# sourceMappingURL=index.js.map