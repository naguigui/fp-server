import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import * as bodyParser from 'body-parser'

import { typeDefs } from '@/app/graphql/typeDefs'
import resolvers from '@/app/graphql/resolvers'
import context from '@/app/graphql/context'

const app: express.Application = express()

const graphqlServer = new ApolloServer({
	typeDefs,
	resolvers,
	context
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

export { app, graphqlServer }
