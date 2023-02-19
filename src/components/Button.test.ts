import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';

import Button from './Button.svelte';

test('shows the button', () => {
	render(Button);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
});

test('changes button text on click', async () => {
	render(Button);
	const button = screen.getByRole('button');
	await fireEvent.click(button);
	const text = screen.getByText('You clicked me!');
	expect(text).toBeInTheDocument();
});
