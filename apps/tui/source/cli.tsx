#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';
import { SetupScreen } from './screens/SetupScreen.js';
import { configExists } from '@repo/config';

const cli = meow(
	`
	Usage
	  $ openslop

	Commands
	  setup  Configure your API key and model preferences
`,
	{
		importMeta: import.meta,
	},
);

const command = cli.input[0];

if (command === 'setup') {
	render(<SetupScreen />);
} else if (command === undefined) {
	if (!configExists()) {
		console.log(
			'Configuration missing. Please run `openslop setup` to configure your agent.',
		);
		process.exit(1);
	} else {
		render(<App />);
	}
} else {
	console.log(`Unknown command: ${command}`);
	cli.showHelp();
}
