import type { Styles } from '../types';

interface Map {
	[key: string]: string;
}
const camelToCSS: Map = {
	backgroundColor: 'background-color',
	minHeight: 'min-height',
	alignItems: 'align-items',
	flexFlow: 'flex-flow'
};

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, string | number]) => {
		return (str += `${camelToCSS[key] ? camelToCSS[key] : key}: ${value};`);
	}, '');
};
