import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/eduService/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/eduService/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/eduService/admin/logout',
    method: 'post'
  })
}
