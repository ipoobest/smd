import axios from 'axios'

export async function login(data) {
  const urls = `${process.env.parseUrl}/login`

  const headers = { 'X-Parse-Application-Id': `${process.env.parseAppId}` }
  try {
    const response = await axios.get(urls, { params: data, headers })
    return response
  } catch (error) {
    return error
  }
}
