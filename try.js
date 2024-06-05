// function api() {
//   fetch("https://664d8fdcede9a2b55653e94f.mockapi.io/test/user")
//     .then((res) => res.json())
//     .then((data) => getapi(data));
// }

async function vercel(){
  const then = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const res = await then.json();
  console.log(res);
}
vercel()
// function getapi(values) {
//   let emp = [];
//   values.map((element) => {
//     let obj = {
//       name: element.name,
//       id: element.id,
//     };
//     console.log(obj);
//   });
// }

// function apipost(){
//     fetch();
// }
// api();
// const arr = [10,20,30,40,50]
//
// console.log(arr)

// let arr =  [1,2,3];
// let arrCopy = JSON.parse(JSON.stringify(arr));
// let a = [];
// arrCopy[0] = 10;

// console.log(arrCopy);
// console.log(arr);

// const arr = [10,20,30,40,50]

// // function emptyArr(...arr){
// //     let a = arr;
// //     a.shift(arr)
// //     return arr
// // }

// console.log(arr)

// function rev(name){
//     name.reverse();
//     console.log(name)
// }
// rev('saravanan');

// function name(value){
//     for(let  i = value.length-1; i >= 0; i--){
//           = value[i]
//           console.log(value)
//     }
// }
// name('saravanan');

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function even(arr){
//     // let value = arr;
//     // arr.filter((a) => a % 2 === 0);
//     // console.log(arr)
// }
// even([1,2,3,4,5])

// Write a JavaScript program to find the maximum number in an array.

// const number = [1,2,3,4,5];

// for(let i = 0; i <= number.length; i--){
//     for(let j = i; j <= number.length; j++){
//         if(number[i] >= number[j]){
//             console.log(number[i])
//         }
//         else{
//             console.log(number[j])
//         }
//     }
// }
// console.log(number)
// const value = number
// value.max();
// console.log(value);

// const obj = {
//     a: number,
//     b: string,
//     ...c; string | number
// }
// const sampleFunction = (a: number,b: string,...c: string | number)=>{
//     return [a,b,c]
// }

// let result: string | number = sampleFunction(1,"2",3,"4",5)
// console.log(result)
// function ss(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//       const result = data.map(post => ({
//         id: post.id,
//         title: post.name
//       }));
//       console.log(result);
//     })
//     .catch(error => console.error('Error:', error));
//     }
//   ss();

// function rev(v) {
//   let a = "";
//   for (let i = v.length - 1; i >= 0; i--) {
//     // a += v[i];
//     a += v.charAt(i);
//   }
//   return a;
// }
// console.log(rev("saravanan"));
let number = [1, 2, 3, 4, 5];

for (let i = number.length; i >= 0; i--) {
  let aa = number;
  aa.shift();
}
console.log(number);
