import request from '@/utils/request'

// 获取轮播图数据
export function getBanners(params){
  return request({
    url:'/banner',
    method: 'get',
    params
  })
}