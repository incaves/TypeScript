/**
 * 当一个对象类型被多次使用时,一般会使用接口(interface)
 * 来描述对象的类型,达到复用的目的
 */
let person: { name: string; age: number; sayHi(): void } = {
  name: 'Jack',
  age: 19,
  sayHi() {},
}
let person1: { name: string; age: number; sayHi(): void } = {
  name: 'Jack',
  age: 19,
  sayHi() {},
}
// 发现重复的结构又写了一次 就可以使用到接口
// 定义一个接口
interface IPerson {
  name: string
  age: number
  sayHi(): void
}
// 使用
let person2: IPerson = {
  name: 'Jack',
  age: 19,
  sayHi() {},
}
