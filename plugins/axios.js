import _ from 'lodash'

export default function({ $axios, app, redirect, store }) {
  $axios.onRequest((config) => {
    const sessionToken = app.$cookies.get(`X-Parse-Session-Token`)
    config.headers.common[`X-Parse-Application-Id`] = process.env.appId

    if (sessionToken) {
      config.headers.common[`X-Parse-Session-Token`] = sessionToken
    }
  })

  $axios.onError((err) => {
    const originalRequest = err.config
    const code = parseInt(err.response && err.response.status)
    const message = _.get(err, `response.data.message`, ``)
    const error = _.get(err, `response.data.error`, ``)

    if (code === 400) {
      if (error === `Invalid session token`) {
        store.dispatch(`auth/logout`)
        redirect(`/login`)
      } else {
        redirect(`/400`)
      }
    }
    if (code === 401) {
      if (message === `jwt expired`) {
        originalRequest.__isRetryRequest = true
        const refreshToken = app.$cookies.get(`refreshToken`)
        const username = _.get(store, `state.auth.auth.user.username`, ``)
        // console.log(`refreshToken user`, username)
        // console.log(`refreshToken refreshToken`, refreshToken)
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
          try {
            const result = await $axios.$post(
              `${process.env.baseUrl}/v1/auth/refresh-token`,
              { username, refreshToken }
            )

            app.$cookies.set(
              `X-Parse-Session-Token`,
              _.get(result, `sessionToken`, ``)
            )
            originalRequest.headers[
              `X-Parse-Session-Token`
            ] = `${result.sessionToken}`
            resolve(result)
          } catch (error) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(`error refresh token: ${error}`)
          }
        })
          .then((res) => {
            return $axios(originalRequest)
          })
          .catch((e) => {
            app.router.push(`/login`)
          })
      }
    }
  })
}
