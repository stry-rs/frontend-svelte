<script lang="ts">
	import type { ITag } from "../utils/types";
	import { TagKind } from "../utils/types";

	import CardStory from '../components/CardStory.svelte';

	let tags: ITag[] = [
		{
			id: "/",
			kind: TagKind.Warning,
			text: "Creator Chose Not To Use Archive Warnings",
		},
		{
			id: "/",
			kind: TagKind.Pairing,
			text: "Hinata Hajime/Komaeda Nagito",
		},
		{
			id: "/",
			kind: TagKind.PairingMinor,
			text: "Hinata Hajime/Komaeda Nagito",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Hinata Hajime",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Komaeda Nagito",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Kamukura Izuru",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Naegi Makoto",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Enoshima Junko",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Nanami Chiaki",
		},
		{
			id: "/",
			kind: TagKind.Character,
			text: "Class 77 (Dangan Ronpa)",
		},
		{
			id: "/",
			kind: TagKind.CharacterMinor,
			text: "Naegi Komaru",
		},
		{
			id: "/",
			kind: TagKind.General,
			text: "Alternate Universe - Royalty",
		},
	];
</script>

<svelte:head>
	<title>home | story</title>
</svelte:head>

<CardStory {tags} />
