export default function({ store, redirect }) {
  if (!store.state.sessionToken) {
    console.log('middle ', store.state.sessionToken)
    return redirect('/login')
  } else {
    store.$axios.$get(`${process.env.parseUrl}/users/me`)
  }
}
