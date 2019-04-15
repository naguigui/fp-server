const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./typeDefs')
const { userResolver } = require('./resolvers/user')
const { JWT_SECRET } = require('../../utils/constants')

const resolvers = userResolver

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({
		JWT_SECRET,
		user: req.user
	})
})

module.exports = server
