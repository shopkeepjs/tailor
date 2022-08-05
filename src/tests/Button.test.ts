import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/svelte';
import { Button } from '../lib';
import { Plane, Loading } from '../lib/components/Icons';
import { colorStore } from '../lib/store';
import { purple } from '../lib/themes';

describe('it should test the visual accuracy of the button', () => {
	const click = jest.fn(() => null);
	it('it shows a Button label', async () => {
		render(Button, { label: 'Test', onClick: () => null });
		expect(screen.getByRole('button', { name: /Test/i })).toBeDefined();
	});

	it('should fire the onClick function when button is clicked', () => {
		render(Button, { label: 'Test', onClick: click });
		fireEvent.click(screen.getByRole('button', { name: /Test/i }));
		expect(click).toBeCalled();
	});

	it('should render an Icon before the text when iconBefore prop is filled', () => {
		render(Button, { iconBefore: Plane, label: 'Button', onClick: () => null });
		const PaperAirplane = screen.getByRole('img', { hidden: true });
		expect(PaperAirplane).toHaveAttribute('aria-hidden', 'true');
	});
	it('should render an Icon after the text when iconBefore prop is filled', () => {
		render(Button, { iconAfter: Plane, label: 'Button', onClick: () => null });
		const PaperAirplane = screen.getByRole('img', { hidden: true });
		expect(PaperAirplane).toHaveAttribute('aria-hidden', 'true');
	});
	it('should show as aria-busy when loading is set to true', () => {
		render(Button, { label: 'Test', loading: true, onClick: () => null });
		const ButtonElement = screen.getByRole('button', { name: /loading/i });
		expect(ButtonElement).toHaveAttribute('aria-busy', 'true');
		expect(ButtonElement).toBeDisabled();
	});
	it('should display the Loading icon when loading is true', () => {
		colorStore.set({ prime: purple });
		render(Button, { label: 'Test', loading: true, onClick: () => null });
		// #903BAE is the default purple color from default button color
		const LoadingIcon = screen.getByTestId('icon-loading-#903BAE');
		expect(LoadingIcon);
	});
	it('should do the things', () => {
		render(Loading, { color: '#C559E3', ariaHidden: true });
		const LoadingIcon = screen.getByRole('img', { hidden: true });
		expect(LoadingIcon);
		expect(LoadingIcon).toHaveAttribute('aria-hidden', 'true');
	});
	it('should do the other things', () => {
		render(Loading, { color: '#C559E3', ariaHidden: false });
		const LoadingIcon = screen.getByRole('img', { hidden: true });
		expect(LoadingIcon);
		expect(LoadingIcon).toHaveAttribute('aria-hidden', 'false');
		expect(LoadingIcon).toHaveAttribute('style', '--arcColor: #C559E3');
	});
});
