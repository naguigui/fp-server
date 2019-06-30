import { gql } from 'apollo-server-express'

export default gql`
	input RoutineInput {
		name: String
	}

	type Routine {
		_id: ID!
		userId: ID!
		name: String!
	}

	extend type Query {
		getRoutine(id: ID!): Routine!
	}

	extend type Mutation {
		createRoutine(name: String!): Routine!
		updateRoutine(id: String!, input: RoutineInput!): Routine!
	}
`
