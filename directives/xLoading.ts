/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-08-08 22:25:53
 * @LastEditors: wangxingren GHwangxingren@163.com
 * @LastEditTime: 2023-11-14 17:36:24
 * @FilePath: /blog-web/directives/lazyLoad.ts
 */

import {createApp, type Directive } from 'vue';
import Loading from '~~/components/Loading/index.vue';

interface HTMLElementCustom extends HTMLElement {
  instance: ComponentPublicInstance
}
// 插入元素
const appendEl = (el: HTMLElementCustom) =>{
  // 给父元素加个定位，让loading元素定位
  el.style.position='relative';
  el?.appendChild(el.instance.$el);
};
// 移除元素
const removeEl = (el: HTMLElementCustom) =>{
  el.style.position='';
  // 踩坑：el?.removeChild(el.instance.$el)->直接这样写会报错：Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.（要删除的节点不是此节点的子节点）
  // 解决：判断一下是否为此节点的子元素再移除
  let $el = el.instance.$el;
  if (el?.contains($el)) {
      el?.removeChild($el);
  }
}

const xLoading: Directive =  {
  mounted(el: HTMLElementCustom, binding: any){
    // 创建app对象 根组件为我们写好的 loading 组件
    const app = createApp(Loading);
    //动态创建一个div节点，将app挂载在div上
    const instance = app.mount(document.createElement('div'));
    // 因为在updated也需要用到 instance 所以将 instance 添加在el上 ，在updated中通过el.instance 可访问到
    el.instance = instance;
    if (binding.value) {
        appendEl(el);
    }
  },
  updated(el: HTMLElementCustom, binding: any) {
      if (binding.value !== binding.oldValue) {
          binding.value ? appendEl(el) : removeEl(el); 
      }
  }
}

export default xLoading;
