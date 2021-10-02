// 引入操作token的几个方法
import { getToken, setToken, removeToken, setTime } from '@/utils/auth'
// 引入登录 获取用户信息的网络请求
import { login, getUserInfo, getUserDetailById } from '@/api/user'

const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    // 设置token
    state.token = token
    // 调用上面引入的方法
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },

  setUserInfo(state, userInfo) {
    // 浅拷贝
    state.userInfo = { ...userInfo }
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  // 登录的action
  async login(context, data) {
    // 响应得到res之前 会先执行响应拦截器
    const res = await login(data)
    /*  把token存进去
    if (res.data.success) context.commit('setToken', res.data.data)
    else console.log('vuex存入失败') */

    // 由于配置了响应拦截器 成功的话会直接return token 失败也会弹窗
    context.commit('setToken', res)
    // 记录token时间戳
    setTime()
  },

  // 获取用户基本资料+详细资料的action
  async getUserInfo(context) {
    const baseres = await getUserInfo()
    const detailres = await getUserDetailById(baseres.userId)
    // 合并
    const userInfo = { ...baseres, ...detailres }
    context.commit('setUserInfo', userInfo)
    // 方便后面使用
    return userInfo
  },

  // 用户登出功能
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

