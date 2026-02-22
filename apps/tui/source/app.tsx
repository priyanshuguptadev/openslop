import React from 'react';
// import {createAgent} from '@repo/agent';
import WelcomeScreen from './screens/WelcomeScreen.js';

// const baseUrl = process.env['LLM_BASE_URL'] || 'https://openrouter.ai/api/v1';
// const model = process.env['LLM_MODEL'] || 'openai/gpt-oss-120b';
// const apiKey = process.env['LLM_API_KEY'];

// if (!apiKey) throw new Error('API key is required');

// const agent = createAgent({
// 	baseUrl,
// 	apiKey,
// 	model,
// });

export default function App() {
	return <WelcomeScreen />;
}
