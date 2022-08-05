import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import { Flex } from '../lib';
import type { ThemeColors } from '../lib/types';

describe('it should test the visual accuracy of the Flex', () => {
	it('should render a Flex component', () => {
		const { component } = render(Flex);
		expect(component);
	});
});
