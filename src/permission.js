// token拦截权限处理
import router from '@/router' // 引入文件夹下面index.js导出的对象
import store from '@/store' // 不能用this.$store 引入文件夹下面index.js导出的对象
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']

router.beforeEach(async(to, from, next) => {
  Nprogress.start()
  // 判断token
  if (store.getters.token) {
    if (to.path === '/login') next('/') // 有token 且访问登录页面跳转到主页
    // 有token 访问其他页面
    else {
      // 如果没有请求过用户数据，就去请求一次数据
      if (!store.getters.userId) {
        // 需要等数据请求完成，再跳转
        // 获取基本资料
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) > -1) next() // 白名单里面的路径没有token也能访问
    else next('/login')
  }
  Nprogress.done()
})

router.afterEach(() => Nprogress.done())
