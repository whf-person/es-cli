// let Animal = function (type) {
//   this.type = type
//   this.eat = function () {

//   }
// }
// 构造函数里面写属性， 外面写方法
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() {
//     console.log('i am eat food')
//   }
// }
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// dog.eat()
// monkey.eat()
// console.log(typeof Animal)

class Animal {
  constructor(type) {
    this.type = type
  }
  get age () {
    return 4
  }
  set age (val) {
    this.realAge = val
  }
  eat() {
    console.log('i am eat food')
  }
}
let dog = new Animal('dog')
console.log(dog.age)
dog.age = 5
console.log(dog.realAge)