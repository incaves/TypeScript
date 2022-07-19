console.log(typeof 'hello ts') // string

// Typescript的typeof操作符号:可以在类型上下问中引用变了或熟悉的类型(类型查询)

// 使用场景:----根据已有的变量的值,获取该值的类型,来简化类型书写---
let p = { x: 1, y: 2 }
function fun(p: { x: number; y: number }) {
  console.log(p)
}
fun(p)
// 简化
function fn(point: typeof p) {
  console.log(point)
}
fn(p)

// typeof 在ts中只能查询对象的属性的类型,和变量的类型
let num: typeof p.x

function Pon(n1: number, n2: number) {
  return n1 + n2
}
// 逗号运算符的左侧未使用，没有任何副作用
let ret:typeof Pon(1,2)
