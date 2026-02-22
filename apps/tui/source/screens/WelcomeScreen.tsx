import React from 'react';
import {Box, Text, useInput} from 'ink';
import figlet from 'figlet';

export default function WelcomeScreen() {
	useInput((_, key) => {
		if (key.return) {
			process.exit(0);
		}
	});

	const open = figlet.textSync('Open', {
		font: 'ANSI Shadow',
	});

	const slop = figlet.textSync('Slop', {
		font: 'ANSI Shadow',
	});

	return (
		<Box flexDirection="column">
			<Box marginTop={1}>
				<Text color="#f5f5f5">{open}</Text>
			</Box>

			<Text color="#f5f5f5">{slop}</Text>

			<Box marginTop={1}>
				<Text dimColor>Agentic coding assistant built for your job.</Text>
			</Box>
		</Box>
	);
}
