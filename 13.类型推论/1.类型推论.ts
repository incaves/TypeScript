/**
 * 某些没有明确指出类型的地方,TS的类型推论机制会帮助提供类型
 * 由于类型推论的存在,有写地方,类型注解可以不写
 * 常见场景 
 * 1.声明变量并初始化时
 * 2.决定函数返回值时
 */
// 1.
let age = 18 // 鼠标放上去上面已经有提示了
age = '12' // 自动提示不能将类型“string”分配给类型“number”


let str; // 这种场景检查不到
str = 19;
str = 'abc';

// 2.
// function add(num1: number, num2: number): number
// 会自动检测到 返回值的类型
function add(num1: number, num2: number) {
    return num1 + num2
}
add(1, 2)


console.log('object'); // void 类型
