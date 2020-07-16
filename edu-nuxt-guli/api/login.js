import request from '@/utils/request'

export default {
    //账号登录
  loginByMember(formItem) {
    return request({
      url: '/uCenter/member',
      method: 'post',
      data:formItem
    })
  },
  // token登录
  loginByToken() {
    return request({
      url: '/uCenter/member',
      method: 'get',
    })
  }
}
