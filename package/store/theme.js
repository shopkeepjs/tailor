import { writable } from 'svelte/store';
import { purple, green, teal, orange } from '../themes';
const colors = {
    purple,
    green,
    teal,
    orange
};
export const colorStore = writable(colors);
export const darkOrLightMode = writable('dark');
