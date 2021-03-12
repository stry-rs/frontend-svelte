<script lang="ts">
	import type { ITag } from "../utils/types";

	import Tag from "./Tag.svelte";

	export let tags: ITag[];
</script>

<ul>
	{#each tags as tag}
		<Tag />
	{/each}
</ul>
