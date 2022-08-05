import type { ThemeColors } from '../../types';
import { type Writable } from 'svelte/store';
export declare const colorStore: Writable<ThemeColors>;
export declare const darkOrLightMode: Writable<'dark' | 'light'>;
