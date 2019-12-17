let x = 1;
let y = 2;
let z = 3;
let obj = {
  x: x,
  y,
  [z + y]: 6,
  * hello() {
    console.log('hello2')
  }
}
obj.hello()
// set 存储的数据必须是唯一的,存储同样的数据会自动过滤
let a = new Set()
// let a = new Set([1,2,3,4])
// a.add('hello')
// a.add('goodbye')
a.add('hello').add('goodbye').add('hello')
// a.delete('hello')
// a.clear()
// console.log(a.has('hello2'), a.size)
// console.log(a.keys())
// console.log(a.values())
// console.log(a.entries())
// a.forEach(item => {
//   console.log(item)
// })
// for (let item of a) {
//   console.log(item)
// }
// let map = new Map([
//   [1, 2],
//   [3, 4]
// ])
let map = new Map()
map.set(1, 2)
map.set(3, 4)
map.set(1, 3)
// map.delete(1)
// map.clear()
// console.log(map.size)
// console.log(map.has(1))
// console.log(map.get(1))
// console.log(map.keys(), map.values(),map.entries())
// map.forEach((value, key) => {
//   console.log(value, key)
// })
// for (let [key, value] of map) {
//   console.log(key, value)
// }
// let o = function () {
//   console.log('o')
// }
// map.set(o, 4)
// console.log(map.get(o))

// d对象拷贝
const target = {
  a: {
    b: {
      c: {
        d: 9
      }
    },
    e: 5,
    f: 6,
    h: 10
  }
}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 2,
    f: 3
  }
}
// 浅赋值，对于不是引用对象进行数据的替换，对于引用类型的值不在遍历，只是把地址
Object.assign(target, source)
console.log(target)