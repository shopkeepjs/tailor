import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import { Button } from '../src/lib';

describe('it should test the visual accuracy of the button', () => {
	it('it shows a Button label', async () => {
		const { getByText } = render(Button, { label: 'Button', onClick: () => null });
		expect(getByText('Button')).toBeDefined();
	});
});
