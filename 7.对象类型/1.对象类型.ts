/**
 * name = string类型
 * age = number类型
 * sayHi 方法可以没有返回值
 * 注意用分号分割(一行的情况下)多行可以不用
 * 如果方法也有页游参数
 */
let person: {
  name: string
  age: number
  //   sayHi(): void 也可以使用箭头函数指定有没有返回值
  sayHi: () => void
  greet(name: string): void
} = {
  name: 'Jack',
  age: 19,
  sayHi() {},
  greet(name) {},
}
