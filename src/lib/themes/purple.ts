const purple = {
	light: '#FEEFFF',
	100: '#F7CDFF',
	200: '#EFACFF',
	300: '#E88AFE',
	400: '#E068FE',
	500: '#C559E3',
	600: '#AB4AC9',
	700: '#903BAE',
	800: '#752D93',
	900: '#5A1E78',
	1000: '#400F5E',
	dark: '#250043',
	lightGradient: '',
	mediumGradient: ''
};

purple.lightGradient = `--lightGradient: linear-gradient(180deg, ${purple['100']} 0%, ${purple['300']} 100%);`;
purple.mediumGradient = `--mediumGradient: linear-gradient(180deg, ${purple['400']} 0%, ${purple['700']} 100%);`;

export default purple;
