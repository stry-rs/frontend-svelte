<script lang="ts">
	import { TagKind } from "../utils/types";

	export let id: string;
	export let kind: TagKind;
</script>

<style lang="postcss">
.tag {
	@apply inline-block;
	@apply mb-1 mr-1 px-3 py-1;
	@apply transition-colors duration-75;
	@apply rounded;
}

.tag:focus {
	@apply ring-2 ring-offset-2 ring-offset-gray-900 ring-blue-400;
}
</style>

<a
	href={ "/tag/" + id }

	class="tag"

	class:bg-red-400={kind === TagKind.Warning}
	class:hover:bg-red-500={kind === TagKind.Warning}

	class:bg-yellow-400={kind === TagKind.Pairing}
	class:hover:bg-yellow-500={kind === TagKind.Pairing}
	class:bg-orange-400={kind === TagKind.PairingMinor}
	class:hover:bg-orange-500={kind === TagKind.PairingMinor}

	class:bg-blue-400={kind === TagKind.Character}
	class:hover:bg-blue-500={kind === TagKind.Character}
	class:bg-violet-400={kind === TagKind.CharacterMinor}
	class:hover:bg-violet-500={kind === TagKind.CharacterMinor}
>
	<slot></slot>
</a>
