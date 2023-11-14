<!--
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-09 22:09:26
 * @LastEditors: wangxingren GHwangxingren@163.com
 * @LastEditTime: 2023-11-14 18:57:05
 * @FilePath: /blog-web/components/HomeMain/HomeMain.vue
-->
<template>
  <div class="home-main flex-1 mdMax:w-full">
    <div class="posts">
      <div v-for="(item, index) in articleList.rows" :key="item.id" class="posts-item flex items-center mdMax:flex-col mdMax:h-auto">
        <div :class="{ 'order-1': index % 2 }" class="posts-cover cursor-pointer h-full mdMax:w-full mdMax:h-230 mdMax:order-none">
          <NuxtLink :to="`/article/detail/${item.id}`">
            <img v-lazyLoad class="h-full w-full object-cover" :src="item.coverImg" alt="">
          </NuxtLink>
        </div>
        <div class="posts-info px-40 mdMax:w-full mdMax:p-20">
          <p class="truncate text-high-color text-2xl leading-normal">{{ item.title }}</p>
          <div class="article-meta-wrap text-desc-color flex items-center my-8 flex-wrap">
            <div v-if="index === 1" class="article-topping flex items-center">
              <i class="iconfont icon-ditu-tuding"></i>
              <span>置顶</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-date flex items-center">
              <i class="iconfont icon-rili mr-2"></i>
              <span>发表于 {{ dayjs(item.createdAt).format('YYYY-MM-DD') }}</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-meta flex items-center">
              <i class="iconfont icon-guidang mr-2"></i>
              <span>Docs 文档</span>
              <span class="px-8">|</span>
            </div>
            <div class="article-meta flex items-center">
              <i class="iconfont icon-pinglun mr-2"></i>
              <span>0条评论</span>
            </div>
          </div>
          <div class="line-clamp-2 leading-loose">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <Pagination
      class="mt-20"
      :size="pageSize"
      :current="currentPage"
      :total="articleList.count"
      :pager-count="7"
      layout="prev, pager, next"
      @pagination="changeCurrentPage"
    />
  </div>
</template>

<script setup lang="ts">
import type { ArticleModel } from '@/api/article/typing';
import type { Page } from '@/components/Pagination/index.vue';
import { dayjs } from 'element-plus';
import load from '@/utils/loading';

const pageSize = ref<number>(8);
const currentPage = ref<number>(1);
let articleList: ArticleModel = reactive({
  count: 0,
  rows: []
}) as ArticleModel;
// lazy默认false,阻塞路由导航,接口请求完成之后路由跳转,lazy:true 不阻塞路由导航
const getArticleList = async () => {
  load.show();
  const { data } = await useApi.article.getArticleList({
    pageSize: pageSize.value,
    page: currentPage.value,
    keyword: '',
    status: 1
  }, { lazy: false });
  load.hide();
  articleList.count = data.value?.data?.count || 0;
  articleList.rows = data.value?.data?.rows || [];
  if (currentPage.value === 1) {
    const useArticleStore = useArticle();
    // 存储top5zui xi文章
    useArticleStore.setArticleTopList(articleList?.rows?.length > 5 ? articleList.rows.slice(0, 5) : articleList.rows);
  }
}
getArticleList();

const changeCurrentPage = (page: Page) => {
  currentPage.value = page.current;
  getArticleList();
}
</script>


<style lang="less" scoped>
.home-main {
  width: 74%;
  .posts {
    .posts-item {
      height: 15.75rem;
      background: @colorBg;
      overflow: hidden;
      transition: all .3s;
      box-shadow: 0 3px 8px 6px rgba(7,17,27,0.09);
      &:hover img {
        transform: scale(1.1);
      }
      &:not(:first-child) {
        margin-top: 20px;
      }
      .posts-cover {
        width: 44%;
        img {
          transition: transform .6s;
        }
      }
      .posts-info {
        width: 56%;
        .article-meta-wrap {
          font-size: 90%;

          .article-topping {
            color: #ff7242;
          }
        }
      }
    }
  }
}
</style>