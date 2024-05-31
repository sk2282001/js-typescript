const restuarent = {
  name: "saravanan sivakumar",
  location: "pencylvenia, firenze, Italy",
  categories: ["Italian", "pizzeria", "vegeterian", "Australian"],
  startmenu: ["salmon fish", "bread alva", "lemon tea", "coconut"],
  mainMenu: ["pizza", "pasta", "Risotta"],
  OpeningHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startmenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.startmenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be to delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , apple, ...otherfoods] = [
  ...restuarent.mainMenu,
  ...restuarent.startmenu,
];
console.log(pizza, apple, otherfoods);

//Objects
const { thu, ...weekdays } = restuarent.OpeningHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers);
};
add(2, 4);
add(5, 6, 7, 8);
add(8, 2, 5, 6, 2, 1);

const x = [23, 5, 7];
add(...x);

restuarent.orderPizza("mushrooms", "Onions", "oilves", "spinach");
restuarent.orderPizza("mushrooms");

//Short hand
let aa = 10;
let bb = 34;
let cc = aa || bb;
console.log(cc);
// restuarent.orderDelivery({
//   time: "11:22",
//   address: "Via del zua, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restuarent.orderDelivery({
//   address: "Via del zua, 21",
//   starterIndex: 1,
// });

// console.log(Object.assign({}, store));
// console.log(restuarent);

/*
// Destructuring with objects
const { name, OpeningHours, categories } = restuarent;
console.log(name, OpeningHours, categories);

// const {
//   name: restuarentName,
//   OpeningHours: hours,
//   categories: tags,
// } = restuarent;
// console.log(restuarentName, hours, tags);

// const { menu = [], startmenu: starter = [] } = restuarent;
// console.log(menu, starter);

//mutating variables
let a = 23;
let b = 111;
const obj = { a: 4, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
// const { fri } = OpeningHours;
// console.log(fri);
// const {
  // fri: { open, close },
//   fri: { open: o, close: c },
// } = OpeningHours;
// console.log(o, c);
*/

/*
//Spread operators

// const arr = [1, 2, 3];
// const badnewArr = [3, 4, arr[0], arr[1], arr[2]];
// console.log(badnewArr);

// const newArr = [3, 4, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(3, 4, 1, 2, 3);

// const newMenu = [...restuarent.mainMenu, "Gnocci"];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restuarent.mainMenu];

// join 2 Arrays
// const menu = [...restuarent.startmenu, ...restuarent.mainMenu];
// console.log(menu);

// const name1 = "saravanan";
// const letter = [...name1, " ", "S."];
// console.log(letter);
// console.log(...name1);
// console.log("s", "n");
//console.log(`${...name1} sivakumar`); // unexpected token

const ingredients = [
  // prompt("Let's make pasta! Ingredients 1?"),
  // prompt("Ingredients 2?"),
  // prompt("Ingredients 3?"),
];
console.log(ingredients);

restuarent.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restuarent.orderPasta(...ingredients);

//Objects
const newRestaurent = { foundedIn: 1991, ...restuarent, founder: "saravanan" };
console.log(newRestaurent);

const restuarentCopy = { ...restuarent };
restuarentCopy.name = "Alvan siuto";
console.log(restuarentCopy.name);
console.log(restuarent.name);
*/

/*
  ///////////////////////////////////
  // Destructuring  Arrays

  const arr = [2, 3, 4];
  const a = [0]
  const b = [1]
  const c = [2]

  //Destructuring the Array
  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);

  let [first, ,second] = restuarent.categories;
  console.log(first, second);

  //   Switching    

  //   const temp = first;
  //   first = second;
  //   second = temp;
  //   console.log(first, second);

  // shorthand

[first, second] = [second, first];
console.log(first, second);

console.log(restuarent.order(2, 0));

//let Destructuring with Arrays

//receive 2 return values from a function
const [starter, main] = restuarent.order(2, 0);
console.log(starter, main);

//lets understand destructuring how its work

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values 

// const [p, q, r] = [6,7];
const [p=1, q=1, r=1] = [6,7];
const [p1=1, q1=1, r1=1] = [6];
console.log(p, q, r); // p q  undefined

*/
