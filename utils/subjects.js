import { request } from './api'

export function get() {
  const url = `${process.env.parseUrl}/classes/subjects`
  return request('get', url, {})
}
export function getById(id) {
  const url = `${process.env.parseUrl}/classes/subjects/${id}}`
  return request('get', url, {})
}

export function create(data) {
  const url = `${process.env.parseUrl}/classes/subjects`
  return request('post', url, data)
}

export function update(data) {
  const url = `${process.env.parseUrl}/classes/subjects/${data.objectId}`
  console.log('urlsss ', url)
  console.log('dataaa s ', data)
  return request('put', url, data)
}

export function deleteSubject(teacherId) {
  const url = `${process.env.parseUrl}/classes/subjects/${teacherId}`
  console.log('urlsss ', url)
  console.log('dataaa s ', teacherId)
  return request('delete', url, {})
}
