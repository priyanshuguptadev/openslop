import React, {useState, useEffect} from 'react';
import {Box, Text, useStdout} from 'ink';

const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export default function Working() {
	const [frame, setFrame] = useState(0);
	const {stdout} = useStdout();
	const width = stdout.columns || 80;
	const containerWidth = Math.min(width - 4, 100);

	useEffect(() => {
		const interval = setInterval(() => {
			setFrame(prev => (prev + 1) % frames.length);
		}, 80);

		return () => clearInterval(interval);
	}, []);

	return (
		<Box width={containerWidth - 2}>
			<Text color="#22d3ee">{frames[frame]}</Text>
		</Box>
	);
}
