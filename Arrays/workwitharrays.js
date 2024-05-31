// let arr = ["a", "b", "c", "d", "e"];
// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(0, 1));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// // SPLICE

// // console.log(arr.splice(2));
// console.log(arr);
// arr.splice(-1, -1, "f"); // startindex , deleteindex, element
// arr.splice(1, 1, "f");
// arr.splice(-1, 2, "f");
// arr.splice(1, 2, "f");
// arr.splice(2, -1, "f");

// console.log(arr);

// //reverse

// arr = ["a", "b", "c", "d", "e", "f"];
// // console.log(arr.reverse())
// const arr2 = ["j", "i", "h", "g", "f"];
// // console.log(arr2.reverse());

// // console.log([...arr, ...arr2]);
// for (let i = arr2.length - 1; i >= 0; i--) {
//   console.log(arr2[i]);
// }

// arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array elements
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log("saravanan sivakumar".at(-1));

// //Arrays forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let es = [1, 2, 4, 5, 6];
// let e1 = es.some((so) => so >= 2);
// console.log(e1);

// let es1 = [3, 4, 5, 6];
// let e11 = es1.every((so) => so >= 2);
// console.log(e11);

// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`you deposit ${movement}`);
// //   }
// //   else{
// //     console.log(`you withdraw ${Math.abs(movement)}`);
// //   }
// // }
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You deposited ${i + 1}: ${movement}`);
//   } else {
//     console.log(`You deposited ${i + 1}: ${Math.abs(movement)}`);
//   }
// }

// console.log("------ forEach ------");
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(arr);
//     console.log(`You deposited ${i + 1}: ${movement}`);
//   } else {
//     console.log(`You withdraw ${i + 1}: ${Math.abs(movement)}`);
//   }
// });

// //shallow copy
// let s = ["2", 34, true, { name: "saravanan" }];
// const ss = JSON.parse(JSON.stringify(s));
// console.log(ss);

// //referrence datatype
// // let aa = [1, 2, 3];
// // let aaa = aa;
// // aaa.push(5);
// // console.log(aa, aaa);

// // deep copy or primitive data types

// // let num = 45;
// // let num1 = num;

// // console.log(num);
// // console.log(num1);

// // num1 = false;
// // console.log(num);
// // console.log(num1);

// //forEach with Map and Sets

// // const currencies = new Map([
// //   ["USD", "United"],
// //   ["GSD", "Europe"],
// //   ["INR", "Indian"],
// // ]);
// // currencies.forEach(function (mov, key, map) {
// //   console.log(map);
// //   console.log(`${key}: ${mov}`);
// // });

// // let currenciesUniq = new Set(["USD", "USD", "ESD", "TUS", "TUS"]);
// // currenciesUniq.forEach(function (value, i, key) {
// //   console.log(key);
// //   console.log(`${i}: ${value}`);
// // });

// //practice

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dog} years old 👨‍🦱`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([13, 24, 45, 6, 1], [4, 1, 2, 15, 3, 8]);

const user = "I Am Saravanan";
const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map(function (name) {
      return name[0];
    })
    .join("");
  return username;
};
console.log(createUsername("i am saravanan"));

const movememnts = [23, 45, 67, 89, 23];
const total = movememnts.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
});

let balance = 0;

for (const key of movememnts) {
  balance += key;
}

console.log(balance);

let a = 10;
let b = 20;
let c = 30;
let z = a && b && c;
let y = a || b || c;
console.log(z);

// const a5 = [12, 34, 6];
// a5[3] = 11;
// console.log(a5)
