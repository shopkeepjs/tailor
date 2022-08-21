import type { Styles } from '../../types';

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

type BoxShadow = 'low' | 'medium' | 'high';

const isPredefinedBoxShadow = (key: string): key is BoxShadow => ['low', 'medium', 'high'].includes(key);

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, string | number]) => {
		if (key === 'boxShadow' && typeof value === 'string' && isPredefinedBoxShadow(value))
			return (str += `box-shadow: ${boxShadowLookup[value]};`);
		return (str += `${camelToCSS[key] ? camelToCSS[key] : key}: ${value};`);
	}, '');
};
