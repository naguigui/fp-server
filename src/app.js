const express = require("express");
const graphQLHTTP = require("express-graphql");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");
const user = require("./app/users/router");

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
  message: () => "Hello World!"
};
// Create an express server and a GraphQL endpoint
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", user);
app.use(
  "/graphql",
  graphQLHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = { app };
