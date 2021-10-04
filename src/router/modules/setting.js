import layout from '@/layout'
export default {
  path: '/setting',
  name: 'setting',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/setting'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '公司设置',
        icon: 'setting'
      }
    }
  ]
}
