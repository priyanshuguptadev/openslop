import React, {useState} from 'react';
import {Box, Text, useApp, useInput} from 'ink';
import TextInput from 'ink-text-input';
import {saveConfig} from '@repo/config';
import Header from '../components/Header.js';
import {validateEnv} from '../utils/env.js';
import {colors} from '../theme/colors.js';

type Step = 'baseUrl' | 'apiKey' | 'model' | 'confirm' | 'done';

export const SetupScreen = () => {
	const {missing} = validateEnv(['baseUrl', 'apiKey', 'model']);
	const {exit} = useApp();

	const [step, setStep] = useState<Step>('baseUrl');

	const [baseUrl, setBaseUrl] = useState('');
	const [apiKey, setApiKey] = useState('');
	const [model, setModel] = useState('');

	const [error, setError] = useState<string | null>(null);

	useInput((_, key) => {
		if (key.escape) exit();
		if (step === 'confirm' && key.return) handleSubmit();
	});

	const next = () => {
		setError(null);

		if (step === 'baseUrl') {
			if (!baseUrl.trim()) {
				setError('Base URL is required.');
				return;
			}
			setStep('apiKey');
		} else if (step === 'apiKey') {
			if (!apiKey.trim()) {
				setError('API key is required.');
				return;
			}
			setStep('model');
		} else if (step === 'model') {
			if (!model.trim()) {
				setError('Model name is required.');
				return;
			}
			setStep('confirm');
		}
	};

	const handleSubmit = async () => {
		setError(null);

		try {
			saveConfig({
				apiKey,
				model,
				baseUrl,
			});
			setStep('done');

			setTimeout(() => {
				exit();
			}, 1200);
		} catch (e) {
			setError('Failed to save configuration.');
		}
	};

	const Progress = () => (
		<Text color={colors.muted}>
			Step {['baseUrl', 'apiKey', 'model', 'confirm'].indexOf(step) + 1}/4
		</Text>
	);

	if (step === 'done') {
		return (
			<Box flexDirection="column">
				<Text color={colors.success} bold>
					Configuration saved successfully.
				</Text>
			</Box>
		);
	}

	return (
		<Box flexDirection="column">
			<Header missing={missing} />

			<Box marginTop={1}>
				<Progress />
			</Box>

			<Box marginTop={2} flexDirection="column">
				{step === 'baseUrl' && (
					<>
						<Text color={colors.accent}>Enter Base URL</Text>
						<Text color={colors.muted}>Example: https://api.openai.com/v1</Text>
						<Box marginTop={1}>
							<TextInput
								value={baseUrl}
								onChange={setBaseUrl}
								onSubmit={next}
							/>
						</Box>
					</>
				)}

				{step === 'apiKey' && (
					<>
						<Text color={colors.accent}>Enter API Key</Text>
						<Box marginTop={1}>
							<TextInput
								value={apiKey}
								onChange={setApiKey}
								onSubmit={next}
								mask="*"
							/>
						</Box>
					</>
				)}

				{step === 'model' && (
					<>
						<Text color={colors.accent}>Enter Model Name</Text>
						<Text color={colors.muted}>Example: gpt-4o-mini</Text>
						<Box marginTop={1}>
							<TextInput value={model} onChange={setModel} onSubmit={next} />
						</Box>
					</>
				)}

				{step === 'confirm' && (
					<>
						<Text color={colors.accent}>Review Configuration</Text>

						<Box marginTop={1} flexDirection="column">
							<Text>Base URL: {baseUrl}</Text>
							<Text>Model: {model}</Text>
							<Text>API Key: {'*'.repeat(Math.min(apiKey.length, 8))}</Text>
						</Box>

						<Box marginTop={1}>
							<Text color={colors.muted}>Press Enter to confirm.</Text>
						</Box>
					</>
				)}
			</Box>

			{error && (
				<Box marginTop={1}>
					<Text color={colors.error}>{error}</Text>
				</Box>
			)}

			<Box marginTop={2}>
				<Text color={colors.muted}>Press Esc to cancel</Text>
			</Box>
		</Box>
	);
};
