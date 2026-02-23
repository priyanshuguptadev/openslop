import React from 'react';
import {Box, Text, useStdout} from 'ink';
import {Message} from '../types/message.js';
import {renderMarkdown} from '../utils/renderMarkdown.js';
import {colors} from '../theme/colors.js';

export default function Messages({messages}: {messages: Message[]}) {
	const {stdout} = useStdout();
	const width = stdout.columns || 80;
	const containerWidth = Math.min(width - 4, 100);
	return (
		<Box flexDirection="column" marginTop={1} width={containerWidth - 2}>
			{messages.map((m, i) => (
				<Text key={i} color={m.role === 'user' ? colors.accent : colors.text}>
					{m.role === 'user' ? 'You: ' : 'Agent: '}
					<Text color={colors.primary}>{renderMarkdown(m.content)}</Text>
				</Text>
			))}
		</Box>
	);
}
