import layout from '@/layout'
export default {
  path: '/permission',
  name: 'permission',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/permission'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '权限管理',
        icon: 'lock'
      }
    }
  ]
}
