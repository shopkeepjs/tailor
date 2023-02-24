import type { Styles } from '../index.d';

export const camelToKebab = (camelString: string): string => {
	let kebabString = '';
	for (let i = 0; i < camelString.length; i += 1) {
		const char = camelString[i];
		if (char.toUpperCase() === char) {
			kebabString += `-${char.toLowerCase()}`;
		} else {
			kebabString += char;
		}
	}
	return kebabString;
};

// TODO - re-implement this
// const boxShadowLookup = {
// 	low: '13px 13px 6px -11px rgba(0, 0, 0, 0.5);',
// 	medium: '10px 13px 14px -7px rgba(0, 0, 0, 0.5);',
// 	high: '13px 13px 13px -5px rgba(0, 0, 0, 0.5);',
// };

// TODO - re-implement this
// const typeGuard = <T extends string>(value: string, arrayToCompare: readonly string[]): value is T => {
// 	if (typeof value !== 'string') return false;
// 	return arrayToCompare.includes(value);
// };

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, unknown]) => {
		// TODO - re-implement this
		// if (key === 'boxShadow' && typeof value === 'string' && typeGuard<Volume>(value, volumes))
		// 	return (str += `box-shadow: ${boxShadowLookup[value]};`);
		const property = camelToKebab(key);
		return `${str} += ${property}: ${value};`;
	}, '');
};
