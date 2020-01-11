async function firstAsync() {
  return Promise.resolve(21)
}
// firstAsync().then(val=>{
//   console.log(val)
// })
// console.log(firstAsync() instanceof Promise)
async function firstAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('now it is done')
    }, 1000)
  })
  let result = await promise
  promise.then(val => {
    console.log(val)
  })
  // console.log(2)
  return Promise.resolve(3)
}
firstAsync().then(val => {
  console.log(val)
})