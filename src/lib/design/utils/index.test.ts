import '@testing-library/jest-dom';

import { parse, camelToKebab } from '.';

describe('it should test all utility functions used', () => {
	it('should convert a camel case string to kebab case string', () => {
		const string = camelToKebab('backgroundColor');
		expect(string).toEqual('background-color');
	});

	it('should return the same string if no camel case', () => {
		const string = camelToKebab('background');
		expect(string).toEqual('background');
	});
	it('should parse camel case object properties to hypen case CSS properties', () => {
		const csObject = {
			backgroundColor: 'purple',
			minHeight: '500px',
			alignItems: 'left',
			flexFlow: 'row',
			rotate: '2',
		};
		const css = parse(csObject);
		expect(css).toEqual('background-color: purple;min-height: 500px;align-items: left;flex-flow: row;rotate: 2;');
	});
});
