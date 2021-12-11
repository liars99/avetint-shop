import adapterNetlify from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
// const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	extensions: ['.svelte'],

	kit: {
		adapter: adapterNetlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
