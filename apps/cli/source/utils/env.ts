import {loadConfig} from '@repo/config';

export function validateEnv(required: string[]) {
	const missing: string[] = [];
	const config = loadConfig();
	const confKeys = Object.keys(config);
	for (const key of required) {
		if (!confKeys.includes(key)) missing.push(key);
	}
	return {
		valid: confKeys.length === 3,
		missing,
	};
}
