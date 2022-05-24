import gql from 'graphql-tag'

export const state = () => ({
  userData: []
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
            last: 30
            privacy: PUBLIC
            orderBy: {field: UPDATED_AT, direction: DESC}
          ) {
            totalCount
            nodes {
              visibility
              url
              updatedAt
              stargazerCount
              primaryLanguage {
                color
                name
              }
              name
              interactionAbility {
                expiresAt
              }
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