const { gql } = require("apollo-server-express");
const User = require("./user");

const Query = gql`
  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

const typeDefs = [Query, User];

module.exports = { typeDefs };
