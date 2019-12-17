// let arr = ['hello', 'world']
// let firstName = arr[0]
// console.log(firstName)

// let arr = ['hello', 'world']
// let [firstName, surName] = arr
// console.log(firstName, surName)
// Array/Object
// let arr =['a','b','c','d']
// let [firstName,,thirdName] = arr
// console.log(firstName, thirdName)
// // let arr ='abcd'
// let [firstName,,thirdName] = new set([1,2,3,4])
// console.log(firstName, thirdName)
// let user = {
//   name: 's',
//   surname: 't'
// };
//   [user.name, user.surname] = [1, 2]
//   console.log(user)
// let arr = ['hello', 'world']
// for (let i=0,item)
// for (let [k, v] of Object.entries(user)) {
//   // 隐式复制，显示索引
//   console.log(k, v)
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)
// let arr = [1]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)

let options = {
  title: 'menu',
  size: {
    width: 100,
    height: 200
  }
}
let {
  title,
  width,
  height
} = options
console.log(title, width, height)