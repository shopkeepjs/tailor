<script lang="ts">
	import { Button, ShopkeepThemeProvider, Flex } from '../lib';

	import { Plane } from '../lib/assets/Icons';
	import { Colors } from '../types';
	let color: Colors = Colors.prime;
	let mode: 'dark' | 'light' = 'dark';
	const doTheThing = () => {
		color = Colors.complementary;
	};
	const swapMode = () => {
		mode = mode === 'dark' ? 'light' : 'dark';
	};
	const darkBackground = 'rgb(37, 32, 38)';
	const lightBackground = 'aliceblue';
</script>

<main>
	<ShopkeepThemeProvider mode="light">
		<Flex
			cs={{
				flexFlow: 'column wrap',
				gap: '1rem',
				alignItems: 'center',
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: mode === 'dark' ? darkBackground : lightBackground
			}}
		>
			<h1 style={`color: ${mode === 'dark' ? lightBackground : darkBackground}`}>Welcome to Shopkeep</h1>
			<Button label="Swap mode" onClick={swapMode} />
			<Button label="Click me" onClick={doTheThing} />
			<Button label="Loaded!" onClick={() => null} loading={true} />
			<Button label="Turn me green" {color} loading={true} onClick={() => null} />
			<Button label="Send" iconBefore={Plane} onClick={() => null} />
			<Button label="Send" {color} iconAfter={Plane} onClick={() => null} />
			<Button label="Green" color="orange" onClick={() => null} />
		</Flex>
	</ShopkeepThemeProvider>
</main>
