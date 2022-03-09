import App from './App.svelte';

const app = new App({
	target: document.body, //inject everything into the body.
	props: {
		name: 'Michael'
	}
});

export default app;