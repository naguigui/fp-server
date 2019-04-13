const { app } = require("./app");

require("./db/mongoose");

app.listen(3000, () =>
  console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
);
