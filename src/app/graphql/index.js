const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("./resolvers/user");

const resolvers = {
  Query: {
    users: getUsers,
    user: getUser
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server;
