import React, {useState} from 'react';
import {Box, useInput} from 'ink';

import InputBox from '../components/Input.js';
import WelcomeScreen from './WelcomeScreen.js';
import {Message} from '../types/message.js';
import Messages from '../components/Messages.js';
import Spinner from 'ink-spinner';

export default function ChatScreen({
	missing,
	agent,
}: {
	missing: string[];
	agent: any;
}) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);

	useInput((value, key) => {
		if (loading) return;

		if (key.return) {
			handleSubmit();
			return;
		}

		if (key.backspace || key.delete) {
			setInput(prev => prev.slice(0, -1));
			return;
		}

		if (!key.ctrl && !key.meta && value) {
			setInput(prev => prev + value);
		}
	});
	async function handleSubmit() {
		if (!input.trim()) return;

		const userMessage = input;

		setMessages(prev => [...prev, {role: 'user', content: userMessage}]);

		setInput('');
		setLoading(true);
		const response = await agent.send(userMessage);

		setMessages(prev => [...prev, {role: 'assistant', content: response}]);

		setLoading(false);
	}

	return (
		<Box flexDirection="column" alignItems="center">
			<WelcomeScreen missing={missing} />
			<Messages messages={messages} />

			{loading && <Spinner type="aesthetic" />}

			<Box marginTop={1}>
				<InputBox value={input} placeholder="what next..." />
			</Box>
		</Box>
	);
}
