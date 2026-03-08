import React from 'react';
import { Box, Text, useStdout } from 'ink';
import { Message } from '../types/message.js';
import { renderMarkdown } from '../utils/renderMarkdown.js';
import { colors } from '../theme/colors.js';

export default function Messages({ messages }: { messages: Message[] }) {
	const { stdout } = useStdout();
	const width = stdout.columns || 80;
	const containerWidth = Math.min(width - 4, 100);

	return (
		<Box flexDirection="column" marginTop={1} width={containerWidth}>
			{messages.map((m, i) => (
				<Box key={i} flexDirection="column" marginBottom={1}>
					{m.role === 'user' ? (
						<Text>
							<Text color={colors.accent} bold>
								You:
							</Text>
							<Text> </Text>
							<Text color={colors.text}>{m.content}</Text>
						</Text>
					) : (
						<Text>
							<Text color={colors.primary} bold>
								Agent:
							</Text>
							<Text> </Text>
							<Text color={colors.text}>{renderMarkdown(m.content)}</Text>
						</Text>
					)}
				</Box>
			))}
		</Box>
	);
}
