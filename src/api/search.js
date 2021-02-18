import request from '@/utils/request'

export function getSearchList(params) {
  return request({
    url: 'search',
    method: 'get',
    params
  })
}