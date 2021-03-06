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

export interface IStory {
	id: string;

	name: String,
	summary: IPart[],

	rating: Rating,
	state: State,

	authors: IUser[],
	commissioners: IUser[],
	dedicatees: IUser[],

	origins: IOrigin[],

	warnings: IWarning[],
	pairings: IPairing[],
	characters: ICharacter[],
	tags: ITag[],
}

export interface IPart {
	id: string;
	kind: PartKind;
	content: string;
}

export enum PartKind {
	Paragraph,
}

export interface IUser {
	id: string;
	name: string;
}

export interface IOrigin {
	id: string;
	text: string;
}

export interface IWarning {
	id: string;
	text: string;
}

export interface IPairing {
	id: string;
	text: string;
	minor: boolean;
}

export interface ICharacter {
	id: string;
	text: string;
	minor: boolean;
}

export interface ITag {
	id: string;
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
