import { getProvidedUserId, getUser } from '~/web3/users'

export const state = () => ({
  isAuthenticated: false,
  user: null,
})

export const mutations = {
  SET_IS_AUTHENTICATED(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }) {
    const id = await getProvidedUserId()

    if (!id) {
      return
    }

    const user = await getUser(id)

    commit('SET_IS_AUTHENTICATED', true)

    commit('SET_USER', user)
  },
}
