import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		cors: {
			origin: 'http://localhost:8080/members',
			"methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
			"preflightContinue": true
		}
	}
};

export default config;
