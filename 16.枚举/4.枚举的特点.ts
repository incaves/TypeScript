/**
 * 枚举是TS独有的
 * Ts中一般转换成JS有的代码会被删除
 * 但枚举的不会
 */
let sons: string[] = ['成都', '北京']

enum dir { up = 'a', left = 'b', right = 'c', Down = 'd' }


function changeDirection(din: dir) {
    console.log(din);
}
changeDirection(dir.Down)
console.log(dir); // { up: 'a', left: 'b', right: 'c', Down: 'd' } 

// 生成的JS代码
// var sons = ['成都', '北京'];
var dir;
(function (dir) {
    dir["up"] = "a";
    dir["left"] = "b";
    dir["right"] = "c";
    dir["Down"] = "d";
})(dir || (dir = {}));
function changeDirection(din) {
    console.log(din);
}
changeDirection(dir.Down);