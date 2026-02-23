import React from 'react';
import Header from '../components/Header.js';

export default function WelcomeScreen({missing}: {missing: string[]}) {
	return <Header missing={missing} />;
}
