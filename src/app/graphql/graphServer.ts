import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { userResolver } from './resolvers/user'

interface Request {
	req: {
		user: any
	}
}


const resolvers = userResolver

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }: Request) => ({
		JWT_SECRET: process.env.JWT_SECRET,
		user: req.user
	})
})

export default server
