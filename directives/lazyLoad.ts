/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-08-08 22:25:53
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-11-04 22:19:31
 * @FilePath: /blog-web/directives/lazyLoad.ts
 */
import { useIntersectionObserver } from '@vueuse/core';
import lodingImg from '@/assets/img/loading.gif';
export default {
  mounted(el: HTMLImageElement, binding: any) {
    //如果不是图片的话就不触发懒加载
    if (!(el instanceof HTMLImageElement)) return;
    // 把真正的地址暂存起来
    const _src = el.src;
    //设置个缺省图片
    el.setAttribute('src', lodingImg);
    //如果你不想用vueuse,你也可以用原生的IntersectionObserver接口来实现
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        //说明到视口中了，那就把真实的地址还原回去
        el.setAttribute('src', _src);
        //同时关闭Observer观察
        stop();
      }
    });
  },
}

