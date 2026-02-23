import React from 'react';
import {Box, Text, useStdout} from 'ink';
import figlet from 'figlet';
import {colors} from '../theme/colors.js';
import Panel from './Panel.js';

const title = figlet.textSync('openslop.', {
	font: 'ANSI Shadow',
});

export default function Header({missing}: {missing: string[]}) {
	const {stdout} = useStdout();
	const width = stdout.columns || 80;
	const allValid = missing.length === 0;
	return (
		<Box flexDirection="column" alignItems="center">
			<Box marginTop={2}>
				<Text color={colors.primary}>{title}</Text>
			</Box>

			<Box marginTop={1}>
				<Text color={colors.muted}>Agentic coding assistant </Text>
				<Text color={colors.accent} italic>
					built for power users.
				</Text>
			</Box>

			<Box marginTop={1}>
				<Text color={colors.border}>
					{'─'.repeat(Math.min(width - 20, 50))}
				</Text>
			</Box>

			<Box marginTop={1}>
				<Text color={colors.primary}>
					github.com/priyanshuguptadev/openslop
				</Text>
			</Box>

			<Panel missing={missing} />

			<Box marginTop={2}>
				{allValid ? (
					<Text color={colors.success}>
						Environment verified. Please enter your next billion dollar idea.
					</Text>
				) : (
					<Text color={colors.error}>
						Missing variables. Follow docs to configure.
					</Text>
				)}
			</Box>
		</Box>
	);
}
