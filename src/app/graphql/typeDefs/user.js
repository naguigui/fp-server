const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    gender: String!
    weight: Int!
    height: Int!
    age: Int!
  }
`;
