import { gql } from 'apollo-server-express'

export default gql`
	input UserInput {
		name: String
		email: String
		gender: String
		weight: Int
		height: Int
		age: Int
	}

	type User {
		_id: ID!
		name: String
		createdAt: String
		email: String!
		gender: String
		weight: Int
		height: Int
		age: Int
		routines: [Routine]
	}

	type AuthPayload {
		accessToken: String!
		refreshToken: String!
	}

	extend type Query {
		users: [User!]!
		user: User!
	}

	extend type Mutation {
		createUser(input: UserInput!): User!
		updateUser(id: String!, input: UserInput!): User!
		deleteUser(id: String!): User!
		registerUser(email: String!, password: String!): User!
		login(email: String!, password: String!): AuthPayload!
		refreshTokens(refreshToken: String!) : AuthPayload!
	}
`
