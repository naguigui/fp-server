const { gql } = require('apollo-server-express')
const User = require('./user')

const RootTypeDef = gql`
	type Query
	type Mutation
	schema {
		query: Query
		mutation: Mutation
	}
`

const typeDefs = [RootTypeDef, User]

module.exports = { typeDefs }
