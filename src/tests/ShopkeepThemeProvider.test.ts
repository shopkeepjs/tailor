/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/svelte';
import { derived, get } from 'svelte/store';
import { Button, ShopkeepThemeProvider } from '../src/lib';
import { Plane, Loading } from '../src/lib/components/Icons';
import { colorStore, darkOrLightMode } from '../src/lib/store';
import { purple, green } from '../src/lib/themes';

describe('it should test the visual accuracy of the button', () => {
	it('it defaults to purple when no color is provided', async () => {
		colorStore.set({ purple: { ...purple, '100': '#F7CDFF' }, prime: purple });
		render(ShopkeepThemeProvider, { mode: 'dark' });
		const color = get(colorStore);
		// @ts-ignore - NOTE - I know better than typescript, because it doesn't know if the store is validated
		expect(color?.prime['100']).toEqual(color?.purple['100']);
	});
	it('it renders with purple color theme', async () => {
		colorStore.set({ purple: { ...purple, '100': '#F7CDFF' }, prime: purple });
		render(ShopkeepThemeProvider, { theme: 'purple', mode: 'dark' });
		const color = get(colorStore);
		// @ts-ignore - NOTE - I know better than typescript, because it doesn't know if the store is validated
		expect(color?.prime['100']).toEqual(color?.purple['100']);
	});
	it('it does not apply a prime color when provided with an incorrect color theme', async () => {
		colorStore.set({ purple: { ...purple, '100': '#F7CDFF' } });
		render(ShopkeepThemeProvider, { theme: 'testfail', mode: 'dark' });
		const color = get(colorStore);
		expect(color?.prime).toBeUndefined();
	});

	it('should change store to "dark" based on users preferred color scheme', () => {
		window.matchMedia = jest.fn().mockImplementation((query) => ({
			matches: query === '(prefers-color-scheme: dark)',
			media: '',
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn()
		}));
		render(ShopkeepThemeProvider);
		const mode = get(darkOrLightMode);
		expect(mode).toEqual('dark');
	});
	it('should change store to "light" based on users preferred color scheme', () => {
		window.matchMedia = jest.fn().mockImplementation((query) => ({
			matches: query === '(prefers-color-scheme: light)',
			media: '',
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn()
		}));
		render(ShopkeepThemeProvider);
		const mode = get(darkOrLightMode);
		expect(mode).toEqual('light');
	});
});
