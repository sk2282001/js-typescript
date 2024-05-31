// function saravanan(message){
//    return message;
// }
// console.log(saravanan("Hi i am saravanan"));

const a = [{ name: "saravanan" }, { name: "udhai" }];

const b = [...a];

b[0] = { name: "oliver" };
b[1].age = 30;

// it's prints age only name doesnt change
console.log(a);
// then it's prints updated both values prints
console.log(b);

console.log(0 == +null); // true(type conversion)
console.log(0 == -null); // true(type conversion)
console.log(-null); // -0
console.log(+null); // 0

const profile = {
  name: "saravanan",
  getName: () => {
    console.log(this.name);
  },
};

profile.getName(); // undefined

function makeAdder(x) {
  //function inner function
  function add(y) {
    return y + x;
  }
  return add;
}

var plusOne = makeAdder(1); //x is 1, plusOne is referrence to add(y)
var plusTwo = makeAdder(10);

console.log(plusOne(3));
console.log(plusTwo(5));

//IIfe
(function IIFE() {
  console.log("Hello!");
})();

function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

function add(a) {
  // anonymous function
  return function (b) {
    return a + b;
  };
}
console.log(add(3)(5));

const names = ["saravannan", "Udhai", "Hari"];

const convertUpperCase = function (names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
};

console.log(convertUpperCase(names));

// setTimeout(function () {
//   console.log("Hello World!");
// }, 1000);

function doSomething() {
  return {
    success: true,
  };
}
console.log(doSomething());

function checkEquality(a, b) {
  if (a == b) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}

checkEquality(0, "0");

const greeting = "Hello";
greeting.length = 10;
console.log(greeting.length);
console.log(greeting);

// async function check(){
//     await Promise.resolve(console.log(1));
//     console.log(2);
// }
// console.log(3);
// check();
// console.log(4);

// const obj = {
//     "1" : "a",
//     1 : "b",
//     [1] : "c"
// };
// console.log(obj["1"]);

//practice
var profName = "saravanan";
const prof = {
  profName: "Udhai",
  year: 1991,
  calcAge: function () {
    // return 2037 - 1991;
    // console.log(this);
    console.log(2037 - this.year);
    // console.log(this.profName)

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1982 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    // console.log(this);
    console.log(`hey ${profName}`); // saravanan
    console.log(`hey ${this.profName}`); // undefined
  },
};

prof.greet();
prof.calcAge();

const restuarent = {
  name: "saravanan sivakumar",
  location: "pencylvenia, firenze, Italy",
  categories: ["Italian", "pizzeria", "vegeterian", "Australian"],
  startmenu: ["salmon fish", "bread alva", "lemon tea", "coconut"],
  mainMenu: ["pizza", "pasta", "Risotta"],
};

// console.log(Object.assign({}, store));
console.log(restuarent);
console.log(restuarent);

// const arr = [2, 3, 4];
// const aa = [0]
// const b = [1]
// const c = [2]
//Destructuring the Array

//Reverse Number

// let numbers = [1, 2, 34, 5];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// function factorial(fact) {
//   let sum = 1;
//   for (let i = 1; i <= fact; i++) {
//     sum = sum * i;
//   }
//   return sum;
// }
// console.log(factorial(5));

const output = "i am saravanan";
const some = output.split("");
let name = [];
for (const iterator of some) {
  let temp = iterator[0].toUpperCase() + iterator.slice(1);
  name.push(temp);
  console.log(temp);
}
let result = name.join(" ");
console.log(result);
