import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';
import { bundleStats } from 'rollup-plugin-bundle-stats';

export default defineConfig({
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
