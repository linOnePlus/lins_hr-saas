import layout from '@/layout'
export default {
  path: '/departments',
  name: 'departments',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/departments'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '组织架构',
        icon: 'tree'
      }
    }
  ]
}
