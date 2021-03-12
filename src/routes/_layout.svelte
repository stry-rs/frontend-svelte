<script lang="ts">
	import Tailwind from '../utils/Tailwind.svelte';

	import Navbar from '../components/Navbar.svelte';

	export let segment: string;
</script>

<!-- This isnt supported yet, uncommeted when https://github.com/sveltejs/svelte/issues/3105 is fixed -->
<!-- <svelte:body class="bg-gray-900" /> -->

<main class="container mx-auto my-2 max-w-screen-xl">
	<Navbar {segment} />

	<slot></slot>
</main>