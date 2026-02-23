import React from 'react';
import {Text} from 'ink';
import {colors} from '../theme/colors.js';

export default function StatusRow({
	envKey,
	label,
	missing,
}: {
	envKey: string;
	label: string;
	missing: string[];
}) {
	const isMissing = missing.includes(envKey);

	const statusText = isMissing ? 'missing' : 'configured';
	const statusColor = isMissing ? colors.error : colors.success;

	const left = ` ${label}`;
	const right = statusText;

	const spacing = 50 - left.length - right.length;

	return (
		<Text>
			<Text color={colors.border}>│</Text>
			<Text> </Text>
			<Text>{left}</Text>
			<Text>{' '.repeat(Math.max(1, spacing))}</Text>
			<Text color={statusColor}>{right}</Text>
			<Text> </Text>
			<Text color={colors.border}>│</Text>
		</Text>
	);
}
