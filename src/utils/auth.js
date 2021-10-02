// 封装了token的增删查改工作
import Cookies from 'js-cookie'

// 设置在cookies中唯一的key值
const TokenKey = 'lins_hrSass_token'
const TimeKey = 'lins_hrSass_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 时间戳的读取和设置
export function setTime() {
  // new Date().getTime() 当前时间到1970.1.1的毫秒值
  //  new Date().getTime() === Date.now()
  return Cookies.set(TimeKey, new Date().getTime())
}

// 获取时间戳
export function getTime() {
  return Cookies.get(TimeKey)
}
