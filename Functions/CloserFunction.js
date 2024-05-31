const newArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
newArr("hi")("saravann");

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));
console.log(addVAT(23));

function add() {
  console.log("hi " + this.name + " your age is " + this.age);
}

const store = {
  name: "Saravanan",
  age: 22,
};

const merge = add.bind(store);
merge();
("use strict"); // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
boundLog2(7, 8);

class math {
  constructor(...args) {
    console.log(new.target === math);
    console.log(...args);
  }
}

const boundIn = math.bind(null, 1, 2, 3);
console.log(new boundIn(4, 5));

// var x = 45;
// this.x = 7;
// const module = {
//   x: 34,
//   value() {
//     return this.x;
//   },
// };

// console.log(module.value());

// coding challenge

const poll = {
  question: "what is your favourite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(`${this.question}`));
  },
};
// console.log(poll.answers);

const addtax = (rate, value) => value + value * rate;
console.log(addtax(0.1, 200));

const addvat = addtax.bind(null, 0.23);
console.log(addvat(250));
