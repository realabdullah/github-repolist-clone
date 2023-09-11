/* eslint-disable @typescript-eslint/no-unused-vars */

interface RepositoryTopics {
	url: string;
	topic: {
		name: string;
		id: string;
	};
}

interface Repository {
	id: string;
	name: string;
	primaryLanguage: {
		color: string;
		id: string;
		name: string;
	};
	updatedAt: string;
	url: string;
	visibility: string;
	description: string;
	forkCount: number;
	repositoryTopics: {
		nodes: RepositoryTopics[];
		totalCount: number;
	};
}

interface Edges {
	cursor: string;
	node: Repository;
}

interface Repositories {
	totalCount: number;
	edges: Edges[];
	pageInfo: {
		endCursor: string;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor: string;
	};
}

interface User {
	avatarUrl: string;
	bio: string;
	login: string;
	followers: {
		totalCount: number;
	};
	following: {
		totalCount: number;
	};
	name: string;
	status: {
		emojiHTML: string;
		message: string;
	};
	twitterUsername: string;
	websiteUrl: string;
	repositories: Repositories;
	starredRepositories: {
		totalCount: number;
	};
}

interface ApiResponse {
	user: User;
}
