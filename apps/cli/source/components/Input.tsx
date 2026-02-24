import React from 'react';
import {Box, Text, useStdout} from 'ink';
import {colors} from '../theme/colors.js';

type Props = {
	value: string;
	placeholder?: string;
	focused?: boolean;
	label?: string;
};

export default function InputBox({
	value,
	placeholder = 'Ask anything...',
	focused = true,
}: Props) {
	const {stdout} = useStdout();
	const width = stdout.columns || 80;

	const containerWidth = Math.min(width - 4, 100);
	const innerWidth = containerWidth - 4;

	const displayValue = value.length === 0 ? placeholder : value;
	const isPlaceholder = value.length === 0;

	const padded =
		displayValue +
		' '.repeat(Math.max(0, innerWidth - displayValue.length - 1));

	const borderColor = focused ? colors.accent : colors.border;

	return (
		<Box flexDirection="column" marginTop={2}>
			<Text color={borderColor}>╭{'─'.repeat(containerWidth - 3)}╮</Text>
			<Text>
				<Text color={borderColor}>│</Text>
				<Text color={focused ? colors.accent : colors.border}> </Text>

				<Text color={isPlaceholder ? colors.muted : colors.text}>{padded}</Text>

				<Text color={borderColor}> │</Text>
			</Text>
			<Text color={borderColor}>╰{'─'.repeat(containerWidth - 3)}╯</Text>

			<Box marginTop={1}>
				<Text color={colors.muted}>Press Enter to send · Ctrl+C to exit</Text>
			</Box>
		</Box>
	);
}
