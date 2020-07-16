import request from '@/utils/request'

export default {
    //获取验证码
  sendCode(phone) {
    return request({
      url: '/eduMsm/msm/'+phone,
      method: 'get'
    })
  },
  registerMember(formItem) {
    return request({
      url: '/uCenter/member/register',
      method: 'post',
      data:formItem
    })
  }
}
