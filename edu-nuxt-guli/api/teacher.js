import request from '@/utils/request'

export default {
    //讲师分页查询
  getTeacherList(page,limit) {
    return request({
      url: '/eduService/front/teacherFront/'+page+"/"+limit,
      method: 'get'
    })
  },
  //讲师个人资料查询
  getTeacherInfo(teacherId) {
    return request({
      url: '/eduService/front/teacherFront/'+teacherId,
      method: 'get'
    })
  }
}
