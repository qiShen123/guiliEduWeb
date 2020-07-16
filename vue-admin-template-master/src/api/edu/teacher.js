import request from '@/utils/request'

export default {
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: '/eduService/edu_teacher/pageTeacher/' + current + '/' + limit,
      method: 'post',
      data: teacherQuery
    })
  },
  removeDataById(id) {
    return request({
      url: '/eduService/edu_teacher/' + id,
      method: 'delete'
    })
  },
  saveTeacher(teacher) {
    return request({
      url: '/eduService/edu_teacher/addTeacher',
      method: 'post',
      data: teacher
    })
  },
  getTeacherInfo(id) {
    return request({
      url: '/eduService/edu_teacher/' + id,
      method: 'get'
    })
  },
  updateTeacher(teacher) {
    return request({
      url: '/eduService/edu_teacher/update',
      method: 'put',
      data: teacher
    })
  }
}
