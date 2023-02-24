import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import Button from './Button.svelte';

test('changes button text on click', async () => {
	render(Button, { label: 'Button' });
	const button = screen.getByRole('button');
	expect(button).toHaveTextContent('Button');
});
