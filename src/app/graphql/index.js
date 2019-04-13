const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server;
