export const state = () => ({
  sessionToken: null
})

export const mutations = {
  setSessionToken(state, token) {
    state.sessionToken = token
  }
}
