import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';
import { Box } from '../lib';

describe('it should test the visual accuracy of the Box', () => {
	it('should render a Box component', () => {
		const { component } = render(Box);
		expect(component);
	});
});
