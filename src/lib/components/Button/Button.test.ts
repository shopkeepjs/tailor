import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent, screen } from '@testing-library/svelte';

// eslint-disable-next-line import/no-named-as-default
import Button from './Button.svelte';

test('changes button text on click', async () => {
	render(Button, { text: 'Clicked' });
	const button = screen.getByRole('button');
	expect(button).toHaveTextContent('Button');

	await fireEvent.click(button);

	expect(button).toHaveTextContent('Clicked');
});
