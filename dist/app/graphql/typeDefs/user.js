"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
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
		createdAt: String!
		email: String!
		gender: String
		weight: Int
		height: Int
		age: Int
	}

	extend type Query {
		users: [User]
		me: User
	}

	extend type Mutation {
		createUser(input: UserInput!): User
		updateUser(id: String!, input: UserInput!): User
		deleteUser(id: String!): User
		registerUser(email: String!, password: String!): User
		login(email: String!, password: String!): String
	}
`;
//# sourceMappingURL=user.js.map