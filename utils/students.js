import { request } from './api'

export function get() {
  const url = `${process.env.parseUrl}/classes/students`
  return request('get', url, {})
}

export function create(data) {
  const url = `${process.env.parseUrl}/classes/students`
  return request('post', url, data)
}

export function edit(data) {
  const url = `${process.env.parseUrl}/users`
  return request('put', url, data)
}

export function deleteTeacher(teacherId) {
  const url = `${process.env.parseUrl}/users`
  return request('delete', url, teacherId)
}
