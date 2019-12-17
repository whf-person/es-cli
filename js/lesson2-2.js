// for 循环
const arr = [2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    break
  }
  // console.log(arr[i])
}
// forEach不支持break，continue结束循环
arr.forEach(function (item) {
  // console.log(item)
})
// every
arr.every(function (item) {
  if (item === 2) {} else {
    // console.log(item)
  }
  return true
})
// for in 遍历object支持break
// arr.a=8
// index是字符串
for (let index in arr) {
  if (index == 2) {
    break
  }
  // console.log(index, arr[index])
}
// for of
for (let item of arr) {
  console.log(item)
}
const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [1.2, 0.2, 3.0]
}
for (let key in Price) {
  // console.log(key, Price[key])
}

// 第二小节 转换es5
// let args=Array.prototype.slice.call(arguments)
// let imgs=[].slice.call(document.querySelectorAll('img')) //nodeList
// console.log(args)
// es6
// Array.prototype.from
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()
// Array.from(arrayLike,mapFN,thisArg)
// let array = Array(5)
// // array.forEach(function (item) {
// //   item =1
// // })
// for (let i=0,len=array.length;i<len;i++){
//   array[i] =1
// }
// console.log(array)
// let array = Array.from({
//   length: 5
// }, function () {
//   return 1
// })
// console.log(array)

// 第三小节 生成新数组
// let array = Array(5)
// let array = []
// Array.prototype.of
// let array = Array.of(1,2,8,4,5)
// console.log(array)
// Array.prototype.fill
// let array = Array(5).fill(7) // [7,7,7,7,7]
// Array.fill(value,start,end)
// 替换数组的莫一阶段
let array = [1, 2, 3, 4, 5]
// console.log(array.fill(8, 2, 4))
let find = array.filter(function (item) {
  return item ===3
})
console.log(find)