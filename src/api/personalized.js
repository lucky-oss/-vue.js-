import request from '@/utils/request'

// 获取热门推荐30首
export function getPersonalized(params) {
  return request({
    url:'/personalized',
    method: 'get',
    params
  })
}

