// 利用类型推论的机制 发现 up = 0 
// 枚举成员是有值的 默认为 从0开始自增的数值
// 数字枚举
// 也可以是给枚举成员初始化
enum dir { up=10, left, right, Down=99 }

function changeDirection(din: dir) {
    console.log(din);
}
changeDirection(dir.up) // 10 
changeDirection(dir.Down) // 99  (enum member) dir.Down = 99