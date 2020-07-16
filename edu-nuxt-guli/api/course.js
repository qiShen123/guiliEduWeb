import request from '@/utils/request'

export default {
    //课程分页查询
  getCourseList(page,limit,searchObj) {
    return request({
      url: '/eduService/front/courseFront/'+page+"/"+limit,
      method: 'post',
      data:searchObj
    })
  },
  //查询单个课程的所有章节
  getAllSubject() {
    return request({
      url: '/eduService/front/subject/',
      method: 'get'
    })
  },
  //查询所有课程清单
  getAllChapter(courseId) {
    return request({
      url: '/eduService/front/courseFront/'+courseId,
      method: 'get'
    })
  }
}
