const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { userResolver } = require("./resolvers/user");

const resolvers = userResolver;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server;
