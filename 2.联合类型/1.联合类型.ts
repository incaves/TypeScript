// 1.一个数组既有字符串又有数字
let arr: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
console.log(arr)

// 注意只有一个竖线和小括号(代表联合类型)

// 2.一个数组既有字符,数值,null,undefined
let arr1: (number | string | null | undefined)[] = [1, 2, 3, null, undefined]
console.log(arr1)

// let arr2: (number | boolean)[] = [1, 2, 3, 'abc']
// 只能出现一个值
// let arr3: number | string[] = 1
// let arr3: number | string[] = 1,3 error

// 表示是一个数组 只能是string类型
let arr3: number | string[] = ['1', '2', '3']
