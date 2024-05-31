const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("saravanan".at(0));
console.log("saravanan".at(-1));

// const expression = function (message) {
//   console.log("hi how are you " + message);
// };
// expression("saravanan");

// const store = [1, 2, 3, 4];
// function print(...store){
// //   let s1 =
// }

const add = 1 / 0;
console.log(add);

const name = "saravanan";
console.log(name);

//reduce

const arr1 = [1, 2, 3, 4];

const sum_with_initial = arr1.reduce(
  (accumalator, element) => accumalator + element
);

console.log(sum_with_initial);

const arr2 = [2, 3, 4];
const a = arr2[0];
const b = arr2[1];
const c = arr2[2];

const [x, y, z] = arr2;
console.log(x, y, z);

const restuarent = {
  name: "saravanansivakumar",
  location: "chennai, chengalpattu, kancheepuram ",
  categories: ["Italian", "pizzarien", "vegetarien", "organic"],
  starterMenu: ["gralic", "ginger paste", "potatto"],
  mainMenu: ["pizza", "pasta", "Risotta"],
};

const [first, , second] = restuarent.categories;
console.log(first, second);

let [third, , others] = restuarent.categories;
console.log(third, others);

// const temp = third;
// third = others;
// others = temp;
// console.log(third, others);
// console.log(others, third);

[third, others] = [others, third];
console.log(third, others);

const drive = "saravanan";
console.log(...drive);

const array1 = ["1", "2", "3", true, { name: "saravanan" }];

array1.forEach((element) => console.log(element)); // arrow function

//constructor function
// function Person(name) {
//   this.name = name;
// }
// let person = new Person("saravanan");
// console.log(person);

// let upper = "saravanan";
function upcase(upper) {
  const some = upper.toUpperCase().slice(0, 1);
  const re = some + upper.slice(1);
  console.log(re);
}
upcase("I am saravanan");
// let upper = "saravanan";
// const some = upper.toUpperCase().charAt() + upper.slice(1);
// console.log(some);

function caps(string) {
  return string.toUpperCase().charAt() + string.slice(1);
}
console.log(caps("saravanan"));

((message) => console.log("this will also never run again" + message))("");

function all(...total) {
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  return sum;
}
all(2, 3, 4, 45, 2);
