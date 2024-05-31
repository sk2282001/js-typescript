//arrays concepts and methods

const number = [1, 2, 3, 4, 5];

number.forEach(consoleItem);

function consoleItem(item, index, arr) {
  console.log("a [" + index + "] = " + item);
}

//arrow function

number.forEach((item, index, arr) => {
  console.log(arr, "a [" + index + "] = " + item);
});

let sum = 0;
number.forEach((item) => {
  sum += item;
});

//sum current value
console.log(sum);

let letters = ["a", "b", "a", "b", "c", "d", "a"];

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item];
  }
});

console.log(letters);

// map

const numbers2 = [1, 2, 4, 5, 6];

const doublenum = numbers2.map(double);
const doublenum2 = numbers2.map(double1);

function double(value, index, arr) {
  return value * 2;
}

function double1(value, index, arr) {
  return value * index;
}

console.log(doublenum);
console.log(doublenum2);

//map with array

const products = [
  { name: "laptop", price: 1000, count: 5 },
  { name: "Desktop", price: 1000, count: 2 },
  { name: "Phone", price: 1000, count: 10 },
];

const totalProductsValue = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));

console.log(totalProductsValue);

const str = ["1", "2", "3", "4", "5"];
// const numtot = num1.map(item => Number(item));
const numtot = str.map(Number);
console.log(typeof numtot);

const fillter1 = [1, 2, 3, 4, 5, 6];

const filnum = fillter1.filter(isEven);

function isEven(value, index, arr) {
  return value % 2 === 0;
}

console.log(filnum);

//filter work with arrays

const people = [
  { name: "saravanan", age: 22 },
  { name: "sunil", age: 12 },
  { name: "sivakumar", age: 21 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

const numbers3 = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

const nums = numbers3.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(nums);
console.log(Math.PI * Number.parseFloat("10px") ** 2);
// square root
console.log(64 ** (1 / 2));
console.log(5 % 2);
console.log(5 / 2);

console.log(2 % 2);
console.log(2 % 0);
console.log(0 % 2);

console.log(1 % 20);
console.log(1 % 30);

console.log(0 / 2);
console.log(2 / 0);

console.log(3.1_4_2_5);
