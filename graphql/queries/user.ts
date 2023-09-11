/* eslint-disable import/no-named-as-default */
import gql from "graphql-tag";

export const GET_USER = gql`
	query user($login: String!) {
		user(login: $login) {
			avatarUrl
			bio
			login
			followers {
				totalCount
			}
			following {
				totalCount
			}
			name
			status {
				emojiHTML
				message
			}
			twitterUsername
			websiteUrl
			repositories(first: 10, isFork: false, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC) {
				totalCount
				edges {
					cursor
					node {
						id
						name
						primaryLanguage {
							color
							id
							name
						}
						updatedAt
						url
						visibility
						description
						forkCount
						repositoryTopics(first: 10) {
							nodes {
								url
								topic {
									name
									id
								}
							}
							totalCount
						}
					}
				}
				pageInfo {
					endCursor
					hasNextPage
					hasPreviousPage
					startCursor
				}
			}
			starredRepositories {
				totalCount
			}
		}
	}
`;
