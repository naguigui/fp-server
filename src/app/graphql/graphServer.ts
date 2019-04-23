import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '@/app/graphql/typeDefs'
import { userResolver } from '@/app/graphql/resolvers/user/user'

interface Request {
	req: {
		JWT_SECRET: string
		user: {
			_id: string
		}
	}
}

const resolvers = userResolver

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }: Request) => ({
		JWT_SECRET: process.env.JWT_SECRET,
		JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
		user: req.user
	})
})

export default server
