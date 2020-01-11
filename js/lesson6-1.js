// console.log(JSON.stringify('\u{D800}'))
// let arr = [1, [2, 3],
//   [4, 5, [6, 7, [8, 9]]]
// ]
// let arr = [1, 2, 3]
// // 扁平化输出 递归
// // console.log(arr.flat(3))
// console.log(arr.map(item => [item * 2]).flat())
// arr.flatMap(item => [item * 2])
// let str = ' foo '
// console.log(str)
// console.log(str.replace(/^\s+|\s+$/g, ''))
// console.log(str.trimLeft()) // 去除前面的空格
// str.trimRight //后面的空格
// str.trim() // 去除首尾
let str = `"foo" and "bar" and "baz"`

// function select(regExp, str) {
//   const matches = []
//   while (true) {
//     const match = regExp.exec(str)
//     if (match === null) break
//     matches.push(match[1])
//   }
//   return matches
// }

// console.log(select(/"([^"]*)"/g, str))
// console.log(str.match(/"([^"]*)"/g))
// function select(regExp, str) {
//   const matches = []
//   str.replace(regExp, function (all, first) {
//     matches.push(first)
//   })
//   return matches
// }
// console.log(select(/"([^"]*)"/g, str))
// function select(regExp,str) {
//   const matches= []
//   for (const match of str.matchAll(regExp)) {
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select(/"([^"]*)"/g, str))

// const arr = [
//   ['foo', 1],
//   ['bar', 2]
// ]
// const obj =Object.fromEntries(arr)
// console.log(obj.bar) //2
const obj = {
  abc:1,
  def:2,
  ghksks:3
}
let res = Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => key.length === 3)
)
console.log(res, 88)
