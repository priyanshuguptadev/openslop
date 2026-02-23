import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import {validateEnv} from './utils/env.js';
import {createAgent} from '@repo/agent';

const baseUrl = process.env['LLM_BASE_URL'];
const model = process.env['LLM_MODEL'];
const apiKey = process.env['LLM_API_KEY'];

export default function App() {
	const {valid, missing} = validateEnv([
		'LLM_BASE_URL',
		'LLM_API_KEY',
		'LLM_MODEL',
	]);
	if (!valid || !model || !apiKey) {
		return <WelcomeScreen missing={missing} />;
	}
	const agent = createAgent({
		baseUrl,
		apiKey,
		model,
	});
	return <ChatScreen missing={missing} agent={agent} />;
}
