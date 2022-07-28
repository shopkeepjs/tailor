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
	parameters: { theme: 'purple', mode: 'light' },
	render: () => ({
		Component: Button,
		props: {
			label: 'Button',
			onClick: () => null
		}
	})
};

export const DarkPrimary = {
	parameters: { theme: 'purple', mode: 'dark' },
	render: () => ({
		Component: Button,
		props: {
			label: 'Button',
			onClick: () => null
		}
	})
};
