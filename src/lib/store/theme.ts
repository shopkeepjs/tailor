import { writable, type Writable } from 'svelte/store';
import type { ThemeColors } from '../design/color/index.d';
import { purple, green, teal, orange } from '../design/color';

export const colors: ThemeColors = {
	purple,
	green,
	teal,
	orange,
};

export const colorStore = writable(colors);
export const polarity: Writable<'dark' | 'light'> = writable('dark');
