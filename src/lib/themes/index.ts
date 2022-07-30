import purple from './purple';
import green from './green';
import type { ThemeColors } from 'sveltekit-shopkeep/src/types';
import { writable } from 'svelte/store';

const test: ThemeColors = {
	purple,
	green
};

export const colorStore = writable(test);
