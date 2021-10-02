const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  // 用户名映射
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  // 用户头像
  staffPhoto: state => state.user.userInfo.staffPhoto

}
export default getters
