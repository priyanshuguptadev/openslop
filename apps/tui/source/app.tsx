import React from 'react';
import Header from './components/Header.js';
import ChatScreen from './screens/ChatScreen.js';
import { validateEnv } from './utils/env.js';
import { createAgent } from '@repo/agent';
import { loadConfig } from '@repo/config';

export default function App() {
	const { baseUrl, apiKey, model } = loadConfig();
	const { valid, missing } = validateEnv(['apiKey', 'model', 'baseUrl']);
	if (!valid || !model || !apiKey || !baseUrl) {
		return <Header missing={missing} />;
	}
	const agent = createAgent({
		baseUrl,
		apiKey,
		model,
	});
	return <ChatScreen missing={missing} agent={agent} />;
}
