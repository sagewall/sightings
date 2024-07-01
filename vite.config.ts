import { sveltekit } from '@sveltejs/kit/vite';
import { bundleStats } from 'rollup-plugin-bundle-stats';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	build: {
		chunkSizeWarningLimit: 1024
	},
	plugins: [
		bundleStats({
			baseline: true
		}),
		sveltekit(),
		visualizer({
			brotliSize: true,
			emitFile: true,
			filename: 'stats.html',
			gzipSize: true,
			template: 'sunburst'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
