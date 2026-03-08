import React from 'react';
import { Box, Text } from 'ink';
import { colors } from '../theme/colors.js';

type Props = {
	value: string;
	placeholder?: string;
	focused?: boolean;
	label?: string;
};

export default function InputBox({
	value,
	placeholder = 'Ask anything...',
}: Props) {
	const displayValue = value.length === 0 ? placeholder : value;
	const isPlaceholder = value.length === 0;

	return (
		<Box flexDirection="column" marginTop={1}>
			<Box flexDirection="row" gap={1}>
				<Text color={colors.accent} bold>
					❯
				</Text>
				<Text color={isPlaceholder ? colors.muted : colors.text}>
					{displayValue}
				</Text>
			</Box>

			<Box marginTop={1}>
				<Text color={colors.muted}>Press Enter to send · Ctrl+C to exit</Text>
			</Box>
		</Box>
	);
}
