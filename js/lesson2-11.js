let o = {
  name: 'xiaoming',
  price: 190
}
// let d= new Proxy(o,{
//   get(target,key) {
//     return target[key] || ''
//   },
//   set (target,key,value) {
//     if(Reflect.has(key)) {
//       if ()
//     }else {
//       return false
//     }
//   }
// })
// window.addEventListener('error', (e) => {
//   console.log(e.message)
// }, true)
// // // 代理 （代理谁？{干什么？}）
// let d = new Proxy(o, {
//   get(target, key) {
//     return target[key] || ''
//   },
//   set(target, key, value) {
//     if (Reflect.has(target, key)) {
//       if (key === 'price') {
//         if (value > 300) {
//           // 不满足规则
//           throw new TypeError('price exceed 300')
//           // return false
//         } else {
//           target[key] = value
//         }
//       } else {
//         target[key] = value
//       }
//     } else {
//       return false
//     }
//   }
// })
// d.price = 301
// d.name = 'hanmeimei'
// d.age = 400
// console.log(d.price, d.name, d.age)
// d.price = 300
// console.log(d.price, d.name)
// 回调函数
// function a(callback) {
//   console.log("我是parent函数a！");
//   console.log("调用回调函数");
//   callback();
// }

// function b() {
//   console.log("我是回调函数b");
// }

// function c() {
//   console.log("我是回调函数c");
// }

// function test() {
//   a(b);
//   a(c);
// }
// test()
// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }
// o.price = 300
// console.log(o.name,o.price)