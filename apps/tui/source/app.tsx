import React, {useState} from 'react';
import {Box, Text, useInput, useApp} from 'ink';
import {createAgent} from '@repo/agent';

const baseUrl = process.env['LLM_BASE_URL'] || 'https://openrouter.ai/api/v1';
const model = process.env['LLM_MODEL'] || 'openai/gpt-oss-120b';
const apiKey = process.env['LLM_API_KEY'];

if (!apiKey) throw new Error('API key is required');

const agent = createAgent({
	baseUrl,
	apiKey,
	model,
});

export default function App() {
	const {exit} = useApp();

	const [input, setInput] = useState('');
	const [result, setResult] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useInput((value, key) => {
		if (key.ctrl && value === 'c') {
			exit();
			return;
		}

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

		setLoading(true);
		setResult(null);

		try {
			const response = await agent.send(input);
			setResult(response);
		} catch (err) {
			setResult('Something went wrong.');
		} finally {
			setLoading(false);
			setInput('');
		}
	}

	return (
		<Box flexDirection="column">
			<Text bold color="#f97316">
				Simple Async TUI
			</Text>

			<Box marginTop={1}>
				<Text color="#94a3b8">Enter something and press Enter:</Text>
			</Box>

			<Box marginTop={1}>
				<Text color="#334155">┌──────────────────────────────┐</Text>
				<Text>
					<Text color="#334155">│ </Text>
					<Text color="#f8fafc">{input}</Text>
					<Text color="#334155">
						{' '.repeat(Math.max(0, 28 - input.length))}│
					</Text>
				</Text>
				<Text color="#334155">└──────────────────────────────┘</Text>
			</Box>

			{loading && (
				<Box marginTop={1}>
					<Text color="#22d3ee">Processing...</Text>
				</Box>
			)}

			{result && !loading && (
				<Box marginTop={1}>
					<Text color="#22c55e">Result:</Text>
					<Text>{result}</Text>
				</Box>
			)}
		</Box>
	);
}
