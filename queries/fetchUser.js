import gql from 'graphql-tag'

export const getUserDetails = gql`
  query user {
    user(login: "realabdullah") {
      login
      avatarUrl
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      name
      status {
        message
        emojiHTML
      }
      twitterUsername
      websiteUrl
    }
  }
`