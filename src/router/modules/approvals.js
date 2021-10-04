import layout from '@/layout'
export default {
  path: '/approvals',
  name: 'approvals',
  component: layout,
  children: [
    {
      // path不写 表示默认显示的页面
      path: '',
      component: () => import('@/views/approvals'),
      meta: {
        //   layout的左侧导航组件通过title元数据去显示
        title: '审批',
        icon: 'tree-table'
      }
    }
  ]
}
