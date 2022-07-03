/**
 * 字母串枚举没有自增张的行为
 * 因此
 * 字符串枚举的每个成员都必须有值
 */
 enum dir { up='a', left='b', right='c', Down='d' }

 function changeDirection(din: dir) {
     console.log(din);
 }
 changeDirection(dir.up) // (enum member) dir.up = "a"