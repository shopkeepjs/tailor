import { parameters } from '../../.storybook/preview';
import { Button } from '../lib';

export default {
	title: 'Button',
	component: Button
};

export const Default = {
	render: () => ({
		Component: Button,
		props: {
			label: 'Button',
			onClick: () => null
		}
	})
};

export const LightPrimary = {
	parameters: { theme: 'green', mode: 'dark' },
	render: () => ({
		Component: Button,
		props: {
			label: 'Button',
			onClick: () => null,
			color: parameters.theme
		}
	})
};
