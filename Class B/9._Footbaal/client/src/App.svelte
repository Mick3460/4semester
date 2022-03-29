<script>
	import {onMount} from "svelte";
	//import {baseURL} from "./store/generalStore";  not needed when SERVING the svelte app

	let players = "";

	onMount( async () => {
		const response = await fetch("api/players"); //$baseURL+
		const {data:playersArray} = await response.json();
		 // COULD BE DONE IN ONE LINE,   const {data} = await response.json();
		 players= playersArray;
	});

</script>

<main>
	<h1>{JSON.stringify(players)}</h1>
	<h1>Page content</h1>
	<h2>{players[0]?.name}</h2> <!-- ?. er en optional, og giver det godt videre hvis det er defineret.-->
</main>

<footer>
	{new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.7em); 
	} 
	footer {
		background-color: grey;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>