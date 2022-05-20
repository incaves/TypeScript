/**
 *  比如在使用axios时
 *  GET是默认请求 method属性就可以忽略
 */
function myAxios(config: { url: string; method?: string }) {
  console.log(config)
}
myAxios({
  url: 'https://typescript.bootcss.com/',
  // method 就开以不传递
})
