import { getUserDetails } from '~/queries/fetchUser.js'
import { getRepo } from '~/queries/fetchRepo.js'
import { getLessRepo } from '~/queries/lessRepo.js'
import { moreRepo } from '~/queries/moreRepo.js'

export const state = () => ({
  typeFilter: ["All", "Sources", "Forks", "Archived", "Mirrors", "Templates"],
  languageFilter: ["All", "Vue", "JavaScript", "SCSS", "HTML", "CSS", "Python", "Jupyter Notebook"],
  sortFilter: ["Last Updated", "Name", "Stars"],
  userData: [],
  repoData: [],
  startCursor: '',
  endCursor: ''
})

export const actions = {
  async getUserDetails({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: getUserDetails
    })
    await commit("updateUserData", response.data.user)
  },

  async getRepoDetails({ state, commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: getRepo,
      variables: {
        first: 30,
      }
    })
    await commit("updateRepoData", response.data.user)
    await commit("updateStartCursor", response.data.user.repositories.pageInfo.startCursor)
    await commit("updateEndCursor", response.data.user.repositories.pageInfo.endCursor)
  },

  async getMoreRepoDetails({ state, commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: moreRepo,
      variables: {
        first: 30,
        after: state.endCursor
      }
    })
    await commit("updateRepoData", response.data.user)
    await commit("updateStartCursor", response.data.user.repositories.pageInfo.startCursor)
    await commit("updateEndCursor", response.data.user.repositories.pageInfo.endCursor)
  },

  async getLessRepoDetails({ state, commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({
      query: getLessRepo,
      variables: {
        first: 30,
        before: state.startCursor
      }
    })
    await commit("updateRepoData", response.data.user)
    await commit("updateStartCursor", response.data.user.repositories.pageInfo.startCursor)
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
  },

  updateStartCursor: (state, payload) => {
    state.startCursor = payload
  }
}

export default {
  state,
  mutations,
  actions
}