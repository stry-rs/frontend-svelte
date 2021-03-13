export enum Contrast {
	High,
	Low,
	Disabled,
}

export enum Rating {
	Explicit,
	Mature,
	Teen,
	General,
}

export enum State {
	Completed,
	InProgress,
	Hiatus,
	Abandoned,
}

export interface ITag {
	id: string;
	kind: TagKind;
	text: string;
}

export enum TagKind {
	Warning,
	Pairing,
	PairingMinor,
	Character,
	CharacterMinor,
	General,
}
