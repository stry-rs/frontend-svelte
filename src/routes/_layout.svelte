<script lang="ts">
	import Navbar from '../components/Navbar.svelte';

	export let segment: string;
</script>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
  </style>

<!-- This isnt supported yet, uncommeted when https://github.com/sveltejs/svelte/issues/3105 is fixed -->
<!-- <svelte:body class="bg-gray-900" /> -->

<main class="container mx-auto my-2 max-w-screen-xl">
	<Navbar {segment} />

	<slot></slot>
</main>
