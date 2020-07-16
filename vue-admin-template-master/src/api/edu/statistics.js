import request from '@/utils/request'

export default {
  createStaData(date){
    return request({
      url: '/statistics/getUserNum/'+date,
      method: 'post',
    })
  },
  getDataSta(searchObj){
    return request({
      url: '/statistics/'+searchObj.type+"/"+searchObj.begin+"/"+searchObj.end,
      method: 'get',
    })
  }
}
