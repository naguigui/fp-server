import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '@/app/graphql/typeDefs'
import resolvers from '@/app/graphql/resolvers'
import context from '@/app/graphql/context'

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context
})

export default server
