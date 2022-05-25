import gql from 'graphql-tag'

export const state = () => ({
  userData: [],
  repoData: []
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
            emoji
            message
          }
          twitterUsername
          websiteUrl
        }
      }
      `
    })
    await commit("updateUserData", response.data.user)
  },

  async getRepoDetails({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
      {
        user(login: "realabdullah") {
          repositories(
            first: 58
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
    })
    await commit("updateRepoData", response.data.user)
    console.log(response.data.user)
  }
}

export const mutations = {
  updateUserData: (state, payload) => {
    state.userData = payload
  },

  updateRepoData: (state, payload) => {
    state.repoData = payload
  }
}

export default {
  state,
  mutations,
  actions
}