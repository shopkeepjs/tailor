import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import validateEnvironment from 'vite-plugin-zod-env-validate';
import { ConfigSchema } from './src/lib/environment/envSchema';

export default defineConfig({
	plugins: [svelte(), validateEnvironment({ schema: ConfigSchema })],
});
