import app from './app'
import graphQLServer from './app/graphql/graphServer'

require('./db/mongoose')

graphQLServer.applyMiddleware({ app })

app.listen({ port: 3000 })
