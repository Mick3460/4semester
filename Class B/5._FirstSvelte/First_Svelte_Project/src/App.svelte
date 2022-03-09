<script>
import Sun from "./components/Sun/Sun.svelte";
import Profile from "./pages/Profile/Profile.svelte";
import Tree from "./pages/Tree/Tree.svelte"

	export let name;
	export let profileName = "Mick";
	export let profileColour = "Green";

	
</script>

<main>
	<h1>Hello {name}!</h1>
	<Sun/>
	<Tree/>
	<Profile profileName={profileName} 
	profileColour={profileColour} />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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