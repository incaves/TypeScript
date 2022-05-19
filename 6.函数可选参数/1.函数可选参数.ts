/**
 * 使用函数实现某个功能时
 * 参数可以传也可以不传
 * 这种情况下,在给函数参数指定类型时,就用到可选参数了
 * 例如:数组的slice方法
 * 可以是 slice()方法
 * 也可以传递一个slice(index)
 * 或者slice(1,3)
 * 一般用问号表示
 * 注意
 * 必选参数后可以出现可选参数
 * 但是可选参数后不能出现必选的参数了
 */
function mySlice(start?: number, end?: number): void {
  console.log('起始索引:', start, '结束索引:', end)
}
mySlice() // undefined,undefined
mySlice(1) // 1,undefined
mySlice(1, 2) // 1,2
