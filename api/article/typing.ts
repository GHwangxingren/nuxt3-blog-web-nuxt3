/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-05-17 22:29:07
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-11-04 22:56:20
 * @FilePath: /blog-web/api/article/typing.ts
 */
export interface ArticleListParams {
  pageSize: number
  page: number
  keyword?: string | number
  status: number
}
export interface ArticleModel {
  count: number
  rows: Array<{
    id: number
    title: string
    createdAt: string
    desc: string
    typeName: string
    readVolume: number
    comments: number
    coverImg: string
    [propName: string]: any
  }>
}