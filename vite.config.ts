import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
// Test
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});

function test = ():boolean => {
	return true
}
