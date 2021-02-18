import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个axios实例
let service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
  },
  error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
  }, error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  })

export default service