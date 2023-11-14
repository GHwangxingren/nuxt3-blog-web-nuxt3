/*
 * @Author: wangxingren GHwangxingren@163.com
 * @Date: 2023-11-14 18:24:24
 * @LastEditors: wangxingren GHwangxingren@163.com
 * @LastEditTime: 2023-11-14 18:56:31
 * @FilePath: \nuxt3-blog-web-nuxt3\utils\loading.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp, ref, reactive } from 'vue';
import Loading from '~~/components/Loading/index.vue';

const info = reactive({
    isShow: false,
    type: 'global'
});
const $loading = createApp(Loading, {info}).mount(document.createElement('div'));
const load = {
    show() { // 控制显示loading的方法
        info.isShow = true;
        document.body.appendChild($loading.$el)
    },
    hide() {
        info.isShow = false;
        const el = $loading.$el;
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
}

export default load;