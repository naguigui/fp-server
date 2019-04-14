const { gql } = require("apollo-server-express");

module.exports = gql`
  input UserInput {
    name: String
    email: String
    gender: String
    weight: Int
    height: Int
    age: Int
  }

  type User {
    _id: ID!
    name: String!
    email: String!
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
