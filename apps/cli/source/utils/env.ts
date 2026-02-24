import {loadConfig} from '@repo/config';

export function validateEnv(required: string[]) {
	const config = loadConfig();

	const missing: string[] = [];

	for (const key of required) {
		if (
			!(key in config) ||
			config[key as keyof typeof config] === null ||
			config[key as keyof typeof config] === undefined
		) {
			missing.push(key);
		}
	}

	return {
		valid: missing.length === 0,
		missing,
	};
}
