/**
 * 给函数添加类型
 * 主要是给 参数和返回值添加类型
 */
// 1.普通函数 -------
// 第一个出现的number表示num1必须是一个数值
// 第二个出现的number表示num2必须是一个数值
// 第三个出现的number表示rteurn返回值必须是一个number(指明了返回值的类型,必须有返回值)
function add(num1: number, num2: number): number {
  return num1 + num2
}
// 如果没有传递参数 会有这样的提示 - 应有 2 个参数,但获得 0 个 -
// add(1, '2')
add(1, 2)

// 2.函数表达式箭头函数
const add1 = (num1: number, num2: number): number => {
  return num1 + num2
}
add1(1, 2)
// 箭头函数的简写方式
const add2 = (num1: number, num2: number): number => num1 + num2
add2(1, 2)

// 同时指定参数,返回值类型(只适用于函数表达式)
// 前面指定类型 中间指定返回值
const add3: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
add3(1, 2)
const add4: (num1: number, num2: number) => number = function (num1, num2) {
  return num1 + num2
}
add4(1, 2)
