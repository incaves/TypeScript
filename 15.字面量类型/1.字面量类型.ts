let str1 = 'hello Ts' // let str1: string
const str2 = 'hello Ts' // const str2: "hello Ts"

// 为什么会出现上面的场景呢？


// str1 是一个变量(let) 它的值可以是任意字符串,所以类型为stirng

// str2 是一个常量(const) 它的值不能变化只能是 'hello Ts' 所以它的类型只能是 'hello Ts'

// 此处的const 声明的变量就是 一个字面量类型
// 也就是说"某个特定的字符串"也可以作为TS中的类型
// 对象 数字 都可以作为类型使用


const str3: "hello Ts" = 'hello Ts' // 如果不声明 会触发 类型推论

let age: 18 = 19 // 不能将类型“19”分配给类型“18”

// 使用场景:字面量类型配合联合类型一起使用

// 使用场景 用来表示一组明确的可选值列表

// 例如在一个场合 它的值只能是这个时
function changeDirection(dir: 'up' | 'don') {
    console.log(dir);
}
changeDirection('up') // 会有提示 只能传递这个两个值
changeDirection('don')
changeDirection('cc') // 类型“"cc"”的参数不能赋给类型“"up" | "don"”的参数