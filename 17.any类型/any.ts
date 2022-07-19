// 不推荐使用any,这会让TypeScript变成 AnyScript 失去TypeScript类型保护的优势

// 当值的类型为any时,可以对值进行任意操作,并且不会有代码提示
let obj: any = '12'
obj = 12 // 没有类型检查
obj() // 不是函数,调用
obj.a = 12 // 不存在的值进行赋值

// 如果代码很长,可以先使用any,后期再转换成对应的基本类型

// ----

// 1.声明变了不提供类型也不提供默认值,就是any类型
let yu // 变量 "yu" 隐式具有 "any" 类型，但可以从用法中推断出更好的类型
// 2.函数参数不加类型,也是any
// (parameter) params: any
function fun(params) {
  console.log(params)
}
fun(false)
fun(true)
