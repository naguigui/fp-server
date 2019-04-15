const { app } = require('./app')
const graphQLServer = require('./app/graphql/graphServer')

require('./db/mongoose')

graphQLServer.applyMiddleware({ app })

app.listen({ port: 3000 })
