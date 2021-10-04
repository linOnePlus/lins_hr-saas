import layout from '@/layout'
export default {
  path: '/social',
  name: 'social',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/social'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '社保管理',
        icon: 'table'
      }
    }
  ]
}
