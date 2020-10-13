export type APINextToken = string;

export interface APIUserModel {
	// I'm going to minimally require that the client ALWAYS
	// requests the id and the name...
	userId: number;
	name: string;
	dob?: string;
	address?: string;
	description?: string;
	createdAt?: number;
	updatedAt?: number;

	tags: Array<{ tagId: string; description: string }>;
}

