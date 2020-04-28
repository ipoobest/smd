import { request } from './api'

export function login(data) {
  const url = `${process.env.parseUrl}/login}`
  return request('get', url, {
    params: { data }
  })
}
