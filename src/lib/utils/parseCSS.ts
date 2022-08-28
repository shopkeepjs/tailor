import type { Styles, Volume } from '../../types';
import { volumes } from '../../types';

interface Map {
	[key: string]: string;
}
const camelToCSS: Map = {
	backgroundColor: 'background-color',
	minHeight: 'min-height',
	alignItems: 'align-items',
	flexFlow: 'flex-flow',
	boxShadow: 'box-shadow'
};

const boxShadowLookup = {
	low: '13px 13px 6px -11px rgba(0, 0, 0, 0.5);',
	medium: '10px 13px 14px -7px rgba(0, 0, 0, 0.5);',
	high: '13px 13px 13px -5px rgba(0, 0, 0, 0.5);'
};

const typeGuard = <T extends string>(value: string, arrayToCompare: readonly string[]): value is T => {
	if (typeof value !== 'string') return false;
	return arrayToCompare.includes(value);
};

type BoxShadow = 'low' | 'medium' | 'high';

const isPredefinedBoxShadow = (key: string): key is BoxShadow => ['low', 'medium', 'high'].includes(key);

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, unknown]) => {
		if (key === 'boxShadow' && typeof value === 'string' && typeGuard<Volume>(value, volumes))
			return (str += `box-shadow: ${boxShadowLookup[value]};`);
		return (str += `${camelToCSS[key] ? camelToCSS[key] : key}: ${value};`);
	}, '');
};
