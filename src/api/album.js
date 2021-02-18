// 导入request.js
import request from '@/utils/request'

// 获取新碟上架数据
export function getAlbum(params) {
  return request({
    url:'/album/newest',
    method: 'get',
    params
  })
}

// 获取所有的新碟
export function getAllAlbum(params){
  return request({
    url:'/album/new',
    method:'get',
    params
  })
} 