// const a = 20
// const b = 10
// const c = 'javascript'
// // const str = 'my age is' + (a + b) + 'i love' + c
// const str = `my age is ${a+b} i love ${c}`
// console.log(str)
const retailPrice = 20
const wholeSalePrice = 16
const type = 'retail'
let showTxt = ''
if (type === 'retail') {
  showTxt = 'aaaa:' + retailPrice
} else {
  showTxt = 'bbb:' + wholeSalePrice
}
console.log(showTxt)