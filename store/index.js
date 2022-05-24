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
            first: 30
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
    // console.log(state.repoData.repositories.nodes[0].primaryLanguage)
  }
}

export default {
  state,
  mutations,
  actions
}