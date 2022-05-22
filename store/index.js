import gql from 'graphql-tag'

export const state = () => ({
  userData: []
})

export const actions = {
  async getData({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        {
          user(login: "realabdullah") {
          avatarUrl
          bio
          followers {
            totalCount
          }
          following {
            totalCount
          }
          login
          name
          repositories(
            orderBy: {field: CREATED_AT, direction: DESC}
            privacy: PUBLIC
            first: 30
          ) {
            totalCount
            edges {
              node {
                homepageUrl
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
          }
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
  }
}

export const mutations = {
  updateUserData: (state, payload) => {
    state.userData = payload
    console.log(state.userData)
  }
}

export default {
  state,
  mutations,
  actions
}