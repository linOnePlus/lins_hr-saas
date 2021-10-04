import layout from '@/layout'
export default {
  path: '/salarys',
  name: 'salarys',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/salarys'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '工资管理',
        icon: 'money'
      }
    }
  ]
}
