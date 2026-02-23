import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import {validateEnv} from './utils/env.js';
import {createAgent} from '@repo/agent';
import {loadConfig} from '@repo/config';
const {baseUrl, apiKey, model} = loadConfig();

export default function App() {
	const {valid, missing} = validateEnv(['apiKey', 'model', 'baseUrl']);
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
