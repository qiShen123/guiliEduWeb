import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/eduService/user/list',
    method: 'get',
    params
  })
}
