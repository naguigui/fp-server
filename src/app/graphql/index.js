const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { getUsers, getUser } = require("./resolvers/user");

const resolvers = {
  Query: {
    users: getUsers,
    user: getUser
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server;
