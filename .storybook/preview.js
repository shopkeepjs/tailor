import { ShopkeepThemeProvider } from '../src/lib';
import Background from './Background.svelte';

export const decorators = [
	(_, { parameters }) => {
		const { mode } = parameters;
		return { Component: Background, props: { mode } };
	},
	(_, { parameters }) => {
		const { theme } = parameters;
		return { Component: ShopkeepThemeProvider, props: { theme } };
	}
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
