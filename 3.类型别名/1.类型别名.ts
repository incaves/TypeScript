let arr: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
let arr1: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
let arr2: (number | string)[] = [1, 2, 3, 'a', 'b', 'c']
/**
 * 当一个-类型-被多次使用时,可以通过类型别名
 * 写在类型注解的地方即可
 */
// 提前声明类名
type INCAVES = (number | string)[] // 表示既可以是数值和字符的数组
type CurrBol = (number | boolean)[] // 表示即可以是数值和布尔值的数组
let arr3: INCAVES = [1, 2, 3, 'a', 'b', 'c']

let arr4: INCAVES = [1, 2, 3, 'a', 'b', 'c']

let bol1: CurrBol = [1, 2, 3, true]

let bol2: CurrBol = [1, 2, 3, true]

// let bol2: CurrBol = [1, 2, 3, true,'c'] error
