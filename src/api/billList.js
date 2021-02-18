// 导入request.js 用来请求服务器
import request from '@/utils/request'

// 获取飙升榜接口数据的方法
export function getSoaringList(params) {
  return request({
    url: '/top/list?id=19723756',
    method: 'get',
    params
  })
}
// 获取新歌榜接口数据的方法
export function getnewSongList(params) {
  return request({
    url: '/top/list?id=3779629',
    method: 'get',
    params
  })
}
// 获取原创榜接口数据的方法
export function getOriginalList(params) {
  return request({
    url: '/top/list?id=2884035',
    method: 'get',
    params
  })
}

