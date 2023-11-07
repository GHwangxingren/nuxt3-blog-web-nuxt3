/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-11-04 22:57:03
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-11-04 23:05:05
 * @FilePath: /blog-web/types/articleType.ts
 */
export interface ArticleListType {
  id: number
  title: string
  createdAt: string
  desc: string
  typeName: string
  readVolume: number
  comments: number
  coverImg: string
  [propName: string]: any
}
