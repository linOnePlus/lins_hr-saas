// 自定义指令文件
export const imgerror = {
  // dom是指令作用的元素 Option.value是指令传过来的值
  inserted(dom, option) {
    // 图片加载错误的时候会触发onerror事件 换成默认图片
    dom.onerror = () => {
      dom.src = option.value
    }
  }
}
