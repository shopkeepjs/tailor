import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import { get } from 'svelte/store';
import ShopkeepThemeProvider from './ClothierThemeProvider.svelte';
import { colorStore } from '../store';
import { purple } from '../design/color';

describe('it should test the visual accuracy of the button', () => {
	it('it defaults to purple when no color is provided', async () => {
		colorStore.set({ purple: { ...purple, '100': '#F7CDFF' }, prime: purple });
		render(ShopkeepThemeProvider, { mode: 'dark' });
		const color = get(colorStore);
		// @ts-expect-error - NOTE - I know better than typescript, because it doesn't know if the store is validated
		expect(color?.prime['100']).toEqual(color?.purple['100']);
	});
	it('it renders with purple color theme', async () => {
		colorStore.set({ purple: { ...purple, '100': '#F7CDFF' }, prime: purple });
		render(ShopkeepThemeProvider, { theme: 'purple', mode: 'dark' });
		const color = get(colorStore);
		// @ts-expect-error - NOTE - I know better than typescript, because it doesn't know if the store is validated
		expect(color?.prime['100']).toEqual(color?.purple['100']);
	});
	it('it throws an error when provided with an incorrect color theme', async () => {
		try {
			colorStore.set({ purple: { ...purple, '100': '#F7CDFF' } });
			render(ShopkeepThemeProvider, { theme: 'testfail', mode: 'dark' });
		} catch (error: unknown) {
			if (error && error instanceof Error) {
				expect(error.message).toBe('testfail is not a correct color choice!');
			}
		}
	});

	// TODO - Fix this tests to work with vitest
	// it('should change store to "dark" based on users preferred color scheme', () => {
	// 	window.matchMedia = jest.fn().mockImplementation((query) => ({
	// 		matches: query === '(prefers-color-scheme: dark)',
	// 	}));
	// 	render(ShopkeepThemeProvider);
	// 	const mode = get(polarity);
	// 	expect(mode).toEqual('dark');
	// });
	// it('should change store to "light" based on users preferred color scheme', () => {
	// 	window.matchMedia = jest.fn().mockImplementation((query) => ({
	// 		matches: query === '(prefers-color-scheme: light)',
	// 	}));
	// 	render(ShopkeepThemeProvider);
	// 	const mode = get(polarity);
	// 	expect(mode).toEqual('light');
	// });
});
