// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

const arr = [1, 2, [3, 4, [5, 6, 7]], 9, [10, 11]]
const array = [1, 2, 3, 4]
array.map(function (item) {
  console.log(this[item])
  //console.log(item)
  //console.log(index)
}, arr)
