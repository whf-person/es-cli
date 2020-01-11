let grade = {
  'lilie': 96,
  'hanmeimei': 99
}
// let result = []
// for (let k in grade) {
//   if (k === 'lilie') {
//     result.push(k)
//   }
// }
// console.log(result)
// console.log(Object.keys(grade).filter(item => item === 'lilie'))
// console.log(Object.values(grade).filter(item => item > 96))
// console.log(Object.entries())
let result = []
for (let [k, v] of grade) {
  if (k === 'lilie') {
    result.push(k)
  }
}