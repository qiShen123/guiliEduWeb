import request from '@/utils/request'

export default {
    //视频播放凭证
  getPlayAuth(playAuth) {
    return request({
      url: '/eduvod/video/getPlayAuth/'+playAuth,
      method: 'get',
    })
  }
}
