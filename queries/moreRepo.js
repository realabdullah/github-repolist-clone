import gql from 'graphql-tag'

export const moreRepo = gql`
  query getMoreRepo ($after: String, $first: Int) {
    user(login: "realabdullah") {
      repositories(
        after: $after,
        first: $first,
        isFork: false
        orderBy: {field: UPDATED_AT, direction: DESC}
        privacy: PUBLIC
      ) {
        edges {
          cursor
          node {
            id
            name
            primaryLanguage {
              color
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
                }
              }
            }
          }
        }
        totalCount
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
`