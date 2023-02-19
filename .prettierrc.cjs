module.exports = {
	useTabs: true,
	singleQuote: true,
	semi: true,
	trailingComma: 'es5',
	tabWidth: 2,
	printWidth: 120,
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
