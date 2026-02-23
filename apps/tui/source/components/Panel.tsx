import React from 'react';
import {Box, Text} from 'ink';
import {colors} from '../theme/colors.js';
import StatusRow from './StatusRow.js';

const REQUIRED = [
	{key: 'baseUrl', label: 'Base URL'},
	{key: 'apiKey', label: 'API Key'},
	{key: 'model', label: 'Model'},
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
