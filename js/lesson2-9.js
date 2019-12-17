// function loadScript(src, callback) {
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => {
//     callback(src)
//   }
//   script.onerr
//   document.head.append(script)
// }

// function test(name) {
//   console.log(name)
// }
// loadScript('./1.js', function (script) {
//   if (script.message) {
//     // 监控上报逻辑
//     loadScript('./2.js', function (script) {
//       console.log(script)
//     })
//   } else {
//     console.log(script)
//     loadScript('./2.js', function (script) {
//       console.log(script)
//       loadScript('./3.js', function (script) {
//         console.log(script)
//       })
//     })
//   }
// })
// test()
// function loadScript(src) {
//   // panding, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     // fulfilled, result
//     script.onload = () => {
//       resolve(src)
//     }
//     // rejected, error
//     script.onerror = () => {
//       reject(err)
//     }
//     document.head.append(script)
//   })
// }
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')
//   }, (err) => {
//     console.log(err)
//   }).then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })
// function test(bool) {
//   if (bool) {
//     return new Promise()
//   }
//   return Promise.reject(new Error('SS'))
// }
// test().then((value) => {
//   console.log(value)
// },(err) => {
//   console.log(err)
// })


// function loadScript(src) {
//   // panding, undefined
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     // fulfilled, result
//     script.onload = () => {
//       resolve(src)
//     }
//     // rejected, error
//     script.onerror = () => {
//       reject(err)
//     }
//     document.head.append(script)
//   })
// }
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')
//   }).then(() => {
//     loadScript('./3.js')
//   }).catch((err) => {
//     console.log(err)
//   })

// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)
// Promise.all([p1,p2,p3]).then((value)=>{
//   console.log(value)
// })

const p1 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(function () {
      resolve(1)
    }, 1000);
  })
}
const p2 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(function () {
      resolve(2)
    }, 3000);
  })
}
Promise.race([p1(),p2()]).then((value)=>{
  console.log(value)
})