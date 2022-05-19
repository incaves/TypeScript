/**
 * 当一个函数没有返回值
 * 那么它的返回值应该是void
 * void表是空的意思
 */
function SonName(name: string): void {
  console.log(`名字是${name}`)
}
SonName('张三')
// 不是必须的
function SonName1(name: string) {
  console.log(`名字是${name}`)
}
SonName1('李四')
