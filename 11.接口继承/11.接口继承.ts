/**
 * 如果连个接口之间相同的属性或方法
 * 可以将公共的属性或方法抽离出来,通过继承来实现复用
 */
interface P1 {
  x: number
  y: number
}
// 发现有相同的属性可以使用继承
interface P2 extends P1 {
  //   x: number
  //   y: number
  z: number // 自己的属性
}
// 类型“{}”缺少类型“P2”中的以下属性: z, x, y
let p: P2 = {
  z: 1,
  x: 1,
  y: 1,
}
