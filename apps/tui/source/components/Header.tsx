import React from 'react';
import { Box, Text } from 'ink';
import figlet from 'figlet';
import { colors } from '../theme/colors.js';

const title = figlet.textSync('openslop.', {
	font: 'ANSI Shadow',
});

export default function Header({ missing }: { missing: string[] }) {
	const allValid = missing.length === 0;

	const REQUIRED = [
		{ key: 'baseUrl', label: 'Base URL' },
		{ key: 'apiKey', label: 'API Key' },
		{ key: 'model', label: 'Model' },
	];

	return (
		<Box flexDirection="column" alignItems="flex-start" marginBottom={1}>
			<Box marginTop={1}>
				<Text color={colors.primary}>{title}</Text>
			</Box>

			<Box marginTop={0}>
				<Text color={colors.muted}>Coding agent in your terminal</Text>
			</Box>

			{!allValid && (
				<>
					<Box marginTop={1} flexDirection="row" gap={1}>
						{REQUIRED.filter(item => missing.includes(item.key)).map(
							(item, index, filtered) => (
								<Box key={item.key} flexDirection="row" gap={1}>
									<Text color={colors.error}>{item.label}</Text>
									{index < filtered.length - 1 && (
										<Text color={colors.muted}>•</Text>
									)}
								</Box>
							),
						)}
					</Box>

					<Box marginTop={1}>
						<Text color={colors.error}>
							Missing variables. Follow docs to configure, or run `openslop setup`.
						</Text>
					</Box>
				</>
			)}
		</Box>
	);
}
