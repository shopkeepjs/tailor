module.exports = {
	useTabs: true,
	singleQuote: true,
	semi: true,
	trailingComma: 'es5',
	tabWidth: 2,
	printWidth: 120,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
