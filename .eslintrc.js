module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'node', 'jest'],
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:import/typescript'
	],
	rules: {
		'@typescript-eslint/camelcase': [
			'error',
			{ ignoreDestructuring: true, properties: 'never' }
		],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts'] }
		],
		'import/prefer-default-export': 'off',
		'node/no-missing-require': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		'spaced-comment': ['error', 'always', { markers: ['/'] }] // TypeScript directives
	},
	overrides: [
		{
			files: '**/*.test.ts',
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'global-require': 'off'
			}
		}
	],
	env: {
		'jest/globals': true
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			typescript: {}
		}
	}
}
