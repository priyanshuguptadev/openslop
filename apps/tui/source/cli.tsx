#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './app.js';
import {SetupScreen} from './screens/SetupScreen.js';

const command = process.argv[2];

if (command === 'setup') {
	render(<SetupScreen />);
} else {
	render(<App />);
}
