import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';
import { Button } from '../src/lib';

it('it works', async () => {
	const { getByText } = render(Button, { label: 'Button', onClick: () => null });
	expect(getByText('Button')).toBeDefined();
});
