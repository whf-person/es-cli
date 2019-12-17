// console.log(Math.floor.apply(null,[1.72]))
// 向下取整
// console.log(Reflect.apply(Math.floor, null, [4.72]))
// Math.ceil 向上取整
// let price = 91.5
// if (price > 100) {
//   price = Math.floor.apply(null, [price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// console.log(Reflect.apply(price > 10? Math.floor:Math.ceil,null,[price]))
// let d = new Date()
// console.log(d.getTime())

// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)

// const student = {}
// Object.defineProperty(student, 'name', {
//   value: 'Mike2'
// })
// console.log(student, r)

// Reflect.getOwnPropertyDescriptor(obj,'x')
// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))
// 验证对象下面是否存在
const obj = {
  x: 1,
  y: 2
}
// Reflect.has(obj, 'x')
// 是否可扩展
// obj.z = 3
// Object.freeze(obj) ///对象冻结
// obj.z = 3
// console.log(Reflect.isExtensible(obj))
// 输出对象的key
Reflect.ownKeys(obj) // ['x', 'y']
Reflect.ownKeys([1, 2]) // 输出['1','2','length']
// Symbol
Reflect.preventExtensions(obj) // 锁定 =freeze 禁止扩展
Reflect.set(obj, 'z', 4) //{x:1,y:2,z:4}
const arr = ['1', '2']
Reflect.set(arr, 2, '4444') //修改数据
Reflect.setPrototypeOf(arr, String.prototype) //修改原型对象