import request from '@/utils/request'

export default {
  getAllChapterVideo(courseId) {
    return request({
      url: '/eduService/chapter/' + courseId ,
      method: 'get'
    })
  },
  addChapter(chapterInfo){
    return request({
      url: '/eduService/chapter',
      method: 'post',
      data:chapterInfo
    })
  },
  getChapter(chapterId){
    return request({
      url: '/eduService/chapter/getChapterInfo/' + chapterId ,
      method: 'get'
    })
  },
  updateChapter(chapterInfo){
    return request({
      url: '/eduService/chapter',
      method: 'put',
      data:chapterInfo
    })
  },
  deleteChapter(chapterId){
    return request({
      url: '/eduService/chapter/' + chapterId ,
      method: 'delete'
    })
  }
}
