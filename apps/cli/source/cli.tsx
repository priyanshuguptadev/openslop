#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import App from './app.js';
import {SetupScreen} from './screens/SetupScreen.js';
import {configExists} from '@repo/config';

if (!configExists()) {
	render(<SetupScreen />);
} else {
	render(<App />);
}
