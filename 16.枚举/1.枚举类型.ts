/**
 * 枚举的功能类似于 字面量类型 + 联合类型的功能 也可以表示一组明确的值
 * 枚举:定义一组命名常量
 */
// 定义了一组常量
enum dir { up, left,right,Down }

function changeDirection(din: dir) {
    console.log(din);
}
// 只能是枚举中定义的
// 传入方式类似于对象 . 调用枚举的成员
changeDirection(dir.Down)
changeDirection(dir.left)
changeDirection(dir.right)
changeDirection(dir.up)
changeDirection(dir.io) // 类型“typeof dir”上不存在属性“io”