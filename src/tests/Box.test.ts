import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import { Box } from '../lib';
import type { ThemeColors } from '../lib/types';

describe('it should test the visual accuracy of the Box', () => {
	it('should render a Box component', () => {
		const { component } = render(Box);
		expect(component);
	});
});
