export const state = () => ({
  sessionToken: ''
})

export const mutations = {
  setSessionToken(state, token) {
    state.sessionToken = token
  }
}
