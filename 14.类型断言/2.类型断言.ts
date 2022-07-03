/**
 * as 
 * 
 */
const aLink = document.getElementById('link')
// 类型“HTMLElement”上不存在属性“href”
aLink.href

// 像a标签 有 href这种独有的属性 就访问不到
// id class 这种共有的属性就可以访问到
const aLink1 = document.getElementById('link') as HTMLAnchorElement
aLink1.href // 可以访问到

// 不常用 也不建议使用
// 第二种 
const aLink2 = <HTMLAnchorElement>document.getElementById('link')

// a标签的类型断言是 HTMLAnchorElement
// tabel  HTMLTableCellElement
// 浏览器选中  console.dir($0);

