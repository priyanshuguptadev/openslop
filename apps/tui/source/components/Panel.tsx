import React from 'react';
import {Box, Text} from 'ink';
import {colors} from '../theme/colors.js';
import StatusRow from './StatusRow.js';

const REQUIRED = [
	{key: 'LLM_BASE_URL', label: 'Base URL'},
	{key: 'LLM_API_KEY', label: 'API Key'},
	{key: 'LLM_MODEL', label: 'Model'},
];

export default function Panel({missing}: {missing: string[]}) {
	return (
		<Box marginTop={3} flexDirection="column" alignItems="center">
			<Text color={colors.border}>┌{'─'.repeat(50)}┐</Text>

			{REQUIRED.map(item => (
				<StatusRow
					key={item.key}
					envKey={item.key}
					label={item.label}
					missing={missing}
				/>
			))}

			<Text color={colors.border}>└{'─'.repeat(50)}┘</Text>
		</Box>
	);
}
