const { app } = require('./app')
const graphQLServer = require('./app/graphql')

require('./db/mongoose')

graphQLServer.applyMiddleware({ app })

app.listen({ port: 3000 }, () =>
	console.log(
		`🚀 Server ready at http://localhost:4000${graphQLServer.graphqlPath}`
	)
)
