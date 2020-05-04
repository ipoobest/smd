import axios from 'axios'
import { request } from './api'

const headers = { 'X-Parse-Application-Id': `${process.env.parseAppId}` }

export async function createUser(data) {
  const url = `${process.env.parseUrl}/users`
  return await request('post', url, data)
}

export async function login(data) {
  const urls = `${process.env.parseUrl}/login`

  try {
    const response = await axios.get(urls, { params: data, headers })
    return response
  } catch (error) {
    return error
  }
}
