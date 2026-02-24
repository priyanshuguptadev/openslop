import {defineConfig} from 'tsup';

export default defineConfig({
	entry: ['source/cli.tsx'],
	format: ['esm'],
	target: 'node18',
	bundle: true,
	splitting: false,
	sourcemap: false,
	clean: true,
	dts: false,
	shims: false,
});
