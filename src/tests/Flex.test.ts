import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';
import { Flex } from '../src/lib';

describe('it should test the visual accuracy of the Flex', () => {
	it('should render a Flex component', () => {
		const { component } = render(Flex);
		expect(component);
	});
});
