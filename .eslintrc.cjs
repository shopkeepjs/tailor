module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:prettier/recommended',
		'plugin:storybook/recommended',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	overrides: [
		{
			files: ['**/*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'import/no-mutable-exports': 'off',
			},
		},
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-return-assign': 'off',
	},
};
