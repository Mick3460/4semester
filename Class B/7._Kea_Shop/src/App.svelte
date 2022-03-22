<script>
	import {Router, Link, Route } from "svelte-navigator"
	import About from "../src/pages/About/About.svelte"
	import Home from "../src/pages/Home/Home.svelte"
</script>

<Router>

	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	</nav>

	<Route path="/about" component={About} />
	<Route path="/" component={Home} />
	
</Router>

<style>
	nav {
		background-color: lightgray;
		width: 100%;
	}
</style>