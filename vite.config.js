import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// server: {
	// 	cors: {
	// 		origin: process.env.PUBLIC_API_URL,
	// 		"methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
	// 		"preflightContinue": true
	// 	}
	// }
};

export default config;
