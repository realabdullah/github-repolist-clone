import gql from 'graphql-tag'

export const getRepo = gql`
  query repo ($first: Int) {
    user(login: "realabdullah") {
      repositories(
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