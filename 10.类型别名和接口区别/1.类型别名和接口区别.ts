// 类型别名
type INCAVES1 = {
  name: string
  age: number 
}
// 接口
interface INCAVES2 {
  name: string
  age: number
}
// 类型别名
let person1: INCAVES1 = {
  name: 'Jack',
  age: 19,
}
// 接口
let person2: INCAVES2 = {
  name: 'Jack',
  age: 19,
}
// let person3: INCAVES2 = [1, 2, 3]

// 相同点:都可以给对象指定类型
// 不同点
// 1.接口只能给对象指定类型
// 2.类型别名可以给任意类型指定别名
