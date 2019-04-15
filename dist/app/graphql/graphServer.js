"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./typeDefs");
const user_1 = require("./resolvers/user");
const resolvers = user_1.userResolver;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers,
    context: ({ req }) => ({
        JWT_SECRET: process.env.JWT_SECRET,
        user: req.user
    })
});
exports.default = server;
//# sourceMappingURL=graphServer.js.map