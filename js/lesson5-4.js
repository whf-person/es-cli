// dotall
// console.log(/foo.bar/us.test('foo\nbar'))
// const re = /foo.bar/sugi
// console.log(re.dotAll) //true
// console.log(re.flags) //sugi
// const t = '2019-06-07'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/) //(4) ["2019-06-07", "2019", "06", "07", index: 0, input: "2019-06-07", groups: undefined]
// 2019
// 06
// 07
// console.log(t[1])
// console.log(t[2])
// console.log(t[3])
// console.log(t) //0: "2019-06-07"
// 1: "2019"
// 2: "06"
// 3: "07"
// groups: {year: "2019", month: "06", day: "07"}
// index: 0
// input: "2019-06-07"
// length: 4
// __proto__: Array(0)
// console.log(t.groups.year)


// 先行断言 后行断言
let test = 'hello world'
console.log(test.match(/hello(?=\sworld)/))
console.log(test.match(/(?<=hello\s)world/)) // 等于向前匹配
console.log(test.match(/(?<!hello\s)world/)) // 不等于