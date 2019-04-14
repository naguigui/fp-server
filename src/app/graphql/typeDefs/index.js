const { gql } = require("apollo-server-express");
const User = require("./user");

const Query = gql`
  input UserInput {
    name: String
    email: String
    gender: String
    weight: Int
    height: Int
    age: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: String!, input: UserInput!): User
    deleteUser(id: String!): User
  }
`;

const typeDefs = [Query, User];

module.exports = { typeDefs };
