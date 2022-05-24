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
  }
}

export const mutations = {
  updateUserData: (state, payload) => {
    state.userData = payload
  }
}

export default {
  state,
  mutations,
  actions
}