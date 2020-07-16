import request from '@/utils/request'

export default {
  addCourseInfo(courseInfo) {
    return request({
      url: '/eduService/course',
      method: 'post',
      data: courseInfo
    })
  },
  getListTeacher() {
    return request({
      url: '/eduService/edu_teacher',
      method: 'get'
    })
  },
  getCourseInfoId(id){
    return request({
      url:'/eduService/course/'+id,
      method:'get'
    })
  },
  updateCourseInfoId(courseInfo){
    return request({
      url:'/eduService/course',
      method:'put',
      data:courseInfo
    })
  },
  getCourseListPage(current, limit, courseQuery) {
    return request({
      url: '/eduService/course/getAllCourses/' + current + '/' + limit,
      method: 'post',
      data: courseQuery
    })
  },
  removeDataById(courseId){
    return request({
      url:'/eduService/course/'+courseId,
      method:'delete',
    })
  }
}
