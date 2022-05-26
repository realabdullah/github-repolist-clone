import gql from 'graphql-tag'

export const state = () => ({
  userData: [],
  repoData: [],
  endCursor: ''
})

export const actions = {
  async getUserDetails({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
      {
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
    })
    await commit("updateUserData", response.data.user)
  },

  async getRepoDetails({ state, commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
       query getUser ($first: Int) {
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
      `,
      variables: {
        first: 30,
      }
    })
    await commit("updateRepoData", response.data.user)
    await commit("updateEndCursor", response.data.user.repositories.pageInfo.endCursor)
  },

  async getMoreRepoDetails({ state, commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
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
      `,
      variables: {
        first: 30,
        after: state.endCursor
      }
    })
    await commit("updateRepoData", response.data.user)
    await commit("updateEndCursor", response.data.user.repositories.pageInfo.endCursor)
  }
}

export const mutations = {
  updateUserData: (state, payload) => {
    state.userData = payload
  },

  updateRepoData: (state, payload) => {
    state.repoData = payload
  },

  updateEndCursor: (state, payload) => {
    state.endCursor = payload
  }
}

export default {
  state,
  mutations,
  actions
}