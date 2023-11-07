/*
 * @Description: 自动化注册自定义指令
 * @Author: web.wangxingren
 * @Date: 2023-08-08 23:01:47
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-10-23 22:04:50
 * @FilePath: /blog-web/plugins/Directives.ts
 */
const directives:Record<string, any>  = import.meta.glob('@/directives/*.ts', {eager:true});
export default defineNuxtPlugin((nuxtApp) => {
  for (let key in directives) {
    const _key = key.match(/directives\/(.+).ts/)![1];
    nuxtApp.vueApp.directive(_key, directives[key].default);
  }
});