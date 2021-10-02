import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store/index'
import { getTime } from '@/utils/auth.js'
import router from '@/router'
// 3600秒后token失效
const tokenTimeOut = 10
const service = axios.create({
  // 执行npm run dev根据开发或者生产环境去调用.env.production 或者.env.development里面的baseurl
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 注入token 请求拦截器 除了登录接口 其他接口去请求数据都需要token
service.interceptors.request.use(config => {
  // 如果存在token 则注入header,并且检验token是否有效
  if (store.getters.token) {
    if (checkTokenTimeOut()) {
      // 超时 就删除token和用户信息
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  // 必须返回config
  return config
})

// 配置响应拦截器 处理接口的返回结果
// 第一个回调函数在能正常访问接口的时候执行，第二个回调是访问接口失败的时候执行（服务器关机）
service.interceptors.response.use(response => {
  // 拿出响应的数据 success成功状态(ture或者false) message消息 data用户token
  const { success, message, data } = response.data
  // console.log(response.data)
  if (success) {
    // Message.success('request successful')
    return data
  } else {
    //   调用elementui弹窗提示
    Message.error(message) // element ui 提示错误信息
    // 接口执行错误，返回一个reject
    return Promise.reject(new Error(message))
  }
}, error => {
  /*  // 接口返回的token超时错误处理 error.response是返回的错误对象
  if (error.response && error.response.data && error.response.data.code === 10002) {
    store.dispatch('user/logout')
    router.push('/login')
    Message.error('token超时')
  } else {
    Message.error(error.message)
  } */
  Message.error(error.message)
  return Promise.reject(error)
})

// 校验token时间
function checkTokenTimeOut() {
  const tokenTime = getTime()
  const currentTime = Date.now()
  console.log((currentTime - tokenTime) / 1000)
  return (currentTime - tokenTime) / 1000 > tokenTimeOut
}
export default service
