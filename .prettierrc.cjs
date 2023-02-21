module.exports = {
	useTabs: true,
	singleQuote: true,
	semi: true,
	trailingComma: 'es5',
	tabWidth: 2,
	printWidth: 120,
	pluginSearchDirs: ['.'],
	plugins: ["prettier-plugin-svelte"],
	overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
};
