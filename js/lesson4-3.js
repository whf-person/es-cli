// for (let i = 1; i < 32; i++) {
//   if (i < 10) {
//     console.log(`0${i}`)
//   }
//   console.log(i)
// }
// for (let i = 1; i < 32; i++) {
//   console.log(i.toString().padStart(2, '0'))
// }

const data = {
  Portland: '78/50',
  Dublin: '88/52',
  lima: '58/40'
}
Object.defineProperty(data, 'lima', {
  enumerable: false,
  writable: false // 只读
})
console.log(Object.keys(data))
console.log(Object.getOwnPropertyDescriptors(data))