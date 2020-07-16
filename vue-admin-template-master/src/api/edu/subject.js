import request from '@/utils/request'

export default {
  getSubjectList() {
    return request({
      url: '/eduService/subject',
      method: 'get',
    })
  }
}
