// 员工的路由导航规则  这些都是动态路由 跟dashboard平级
import layout from '@/layout'
export default {
  path: '/employees',
  name: 'employees',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/employees'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '员工管理',
        icon: 'people'
      }
    }
  ]
}
