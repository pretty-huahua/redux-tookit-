// import { AxiosPromise } from "axios";
import instance from './01.http'
/** 获取文字信息的api  */

// export const getArticleListByCid = (cid: number, keywords: string): AxiosPromise => instance.get('/articles', { params: { cid, keywords } });

// 以上请求可以这样发【模板】
// export function getArticleListByCid2(data:object) {
//     return instance({
//         method:'get',
//         url:'/articles',
//         params:data
//     })
// }

export function sayHallo() {
  return instance({
    method: 'get',
    url: '/hello.do',
  })
}
export function cacheControlTest() {
  return instance({
    method: 'get',
    url: '/cacheControlTest.do',
  })
}
export function expiresTest() {
  return instance({
    method: 'get',
    url: '/expiresTest.do',
  })
}
