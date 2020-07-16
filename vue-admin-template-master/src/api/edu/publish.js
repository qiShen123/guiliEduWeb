import request from '@/utils/request'

export default {
  getPublishCourseInfo(courseId) {
    return request({
      url: '/eduService/course/getCourseInfo/' + courseId ,
      method: 'get'
    })
  },
  savePublish(courseId) {
    return request({
      url: '/eduService/course/publish/' + courseId ,
      method: 'put'
    })
  },

}
