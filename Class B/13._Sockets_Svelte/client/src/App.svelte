<script>
import UserRegistration from "./pages/userRegistration/userRegistration.svelte";
import { onMount } from "svelte";
import Colors from "./pages/colors/Colors.svelte";

let username;
onMount(async() => {
	const response = await fetch("/api/fetchUser")
	const {data} = await response.json()
	username = data
	console.log(data)
})

</script>

<main>
{#if username}
	<Colors/>
{:else}
	<UserRegistration/>
{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>