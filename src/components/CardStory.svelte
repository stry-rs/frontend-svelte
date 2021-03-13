<script lang="ts">
	import type { ITag } from "../utils/types";
	import { Contrast, State, Rating } from "../utils/types";

	import Link from "./Link.svelte";
	import MediaObject from "./MediaObject.svelte";

	import CardStoryTile from "./CardStoryTile.svelte";
	import TagList from "./TagList.svelte";

	export let state: State;
	export let rating: Rating;

	export let tags: ITag[];
</script>

<div class="my-2">
	<MediaObject>
		<span slot="tile">
			<CardStoryTile {state} {rating} warning={false} />
		</span>
		<span slot="title">
			<p>
				<Link href="/" contrast={Contrast.High}>The Royal Night Sky</Link>
				<span class="text-opacity-60 text-white">by</span>
				<Link href="/" contrast={Contrast.High}>Im_Miss_Understood</Link>
			</p>
		</span>
		<span slot="sub">
			<p><Link href="/" contrast={Contrast.Low}>Dangan Ronpa - All Media Types</Link></p>
		</span>
		<span slot="meta">
			<p class="text-opacity-60 text-white">13 Jan 2021</p>
		</span>
	</MediaObject>
	<div class="px-3 sm:px-6 lg:px-8 py-2 text-sm">
		<TagList {tags} />
	</div>
</div>
