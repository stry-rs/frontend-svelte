<script lang="ts">
	import { TagKind } from "../utils/types";

	export let id: string;
	export let kind: TagKind;

	let url: string;

	switch (kind) {
		case TagKind.Warning:
			url = "/warning/" + id;
			break;
		case TagKind.Pairing:
		case TagKind.PairingMinor:
			url = "/pairing/" + id;
			break;
		case TagKind.Character:
		case TagKind.CharacterMinor:
			url = "/character/" + id;
			break;
		case TagKind.General:
			url = "/tag/" + id;
			break;

		default:
			url = "/";
			break;
	}
</script>

<a
	href={url}

	class="
		inline-block
		text-sm
		mr-1.5 mb-1.5 px-2 py-0.5
		transition-colors duration-75
		rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-400
	"

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

	class:bg-gray-400={kind === TagKind.General}
	class:hover:bg-gray-500={kind === TagKind.General}
>
	<slot></slot>
</a>
