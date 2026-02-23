export function validateEnv(required: string[]) {
	const missing: string[] = [];

	for (const key of required) {
		if (!process.env[key]) {
			missing.push(key);
		}
	}

	return {
		valid: missing.length === 0,
		missing,
	};
}
