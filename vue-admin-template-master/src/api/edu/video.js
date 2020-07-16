import request from '@/utils/request'

export default {
  addVideo(videoInfo){
    return request({
      url: '/eduService/video',
      method: 'post',
      data:videoInfo
    })
  },
  getVideo(videoId){
    return request({
      url: '/eduService/video/' + videoId ,
      method: 'get'
    })
  },
  updateVideo(videoInfo){
    return request({
      url: '/eduService/video',
      method: 'put',
      data:videoInfo
    })
  },
  deleteVideo(videoId){
    return request({
      url: '/eduService/video/' + videoId ,
      method: 'delete'
    })
  },
  deleteAliyunvod(videoId){
    return request({
      url: '/eduvod/video/' + videoId ,
      method: 'delete'
    })
  }
}
