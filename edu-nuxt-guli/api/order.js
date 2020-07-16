import request from '@/utils/request'

export default {
    //创建订单
  createOrder(courseId) {
    return request({
      url: '/order/t-order/'+courseId,
      method: 'get',
    })
  },
  //获取订单信息
  getOrderInfo(orderNo){
    return request({
      url: '/order/t-order/getOrderInfo/'+orderNo,
      method: 'get',
    })
  }
}
