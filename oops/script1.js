"use strict";
// TypeScript simple types
const message = "hello world";
console.log(message);
const age = 22;
console.log(age);
let age1 = "23";
age1 = 34;
console.log(typeof age1);
const json = JSON.parse("56");
console.log(typeof json);
// TypeScript special types
// const x:never = true;
let v = true;
v = "string";
Math.round(v);
console.log(v);
const y = undefined;
const z = null;
//TypeScript Arrays
const names = [];
names.push("saravanan");
console.log(names);
const names1 = ["Hi saravanan"];
// names1.push['saravanan'];
console.log(names1);
const store = [];
store.push("saravanan");
console.log(store);
// basic types
const id = 1;
const intern = "aequalis";
const isvalid = true;
const x = "hello";
const ids = [1, 2, 3, 4, 5];
const arr = [1, "saravanan", true];
console.log(arr);
// TS Arrays
const names2 = ["Dylan"];
// names2.push("Jack");
console.log(names2);
const numbers = [1, 2, 3];
numbers.push(4); // no error
// numbers.push("5"); // error
console.log(numbers);
const head = numbers[0];
console.log(head);
// TS Tuples
let ourtuples;
ourtuples = [1, true, "saravanan"];
console.log(ourtuples);
let ourtuples1;
// ourtuples1 = [false, 'Coding is my guess', 200];
// console.log(ourtuples1)
let ourtuples2;
// let ourtuples2: readonly [number, boolean, string];
ourtuples2 = [5, true, "Hi i am saravanan"];
// no type safety in tuples
ourtuples2.push("hook the knife");
console.log(ourtuples2);
//Tuple Array
let employee;
employee = [
  [1, "saravanan"],
  [2, "udhai"],
  [3, "sivakumar"],
];
console.log(employee);
employee.push([23, "tamil"]);
console.log(employee);
// Union
let id1 = "56";
id1 = 56;
console.log(typeof id1);
//Enum
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["Up"] = 1)] = "Up";
  Direction1[(Direction1["Down"] = 2)] = "Down";
  Direction1[(Direction1["Left"] = 3)] = "Left";
  Direction1[(Direction1["Right"] = 4)] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
  Direction2["Up"] = "Up";
  Direction2["Down"] = "Down";
  Direction2["Left"] = "Left";
  Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
console.log(Direction1[0]);
console.log(Direction1[1]);
console.log(Direction1.Up);
console.log(Direction1.Left);
const user11 = { id: 11, name: "saravanansivakumar" };
console.log(user11);
const user1 = { id: 1, name: "saravanan" };
console.log(user1.name);
// Type Assertion
let cid = "saravanan";
let customerId = cid;
// customerId = true; // error
console.log(customerId);
console.log(typeof customerId);
let customerId1 = cid;
// Functions
function sub(a, b) {
  return a - b;
}
console.log(sub(4, 6));
function log(message) {
  console.log(message);
}
log("saravanan");
function saravanan(name) {
  return ` i am , ${name}`;
}
saravanan("saravanan");
const user111 = {
  id: 11,
  name: "saravanansivakumar",
};
// user111.id = 111;
console.log(user11);
const add = (x, y) => x + y;
const sub1 = (x, y) => x - y;
// Classes
// class Rectangle{
//     id:number;
//     name:string;
//     constructor(){
//         // this.id = id;
//         // this.name = name;
//         console.log(123)
//     }
// }
// const saravanan = new Rectangle();
class Rectangle {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    console.log(123);
  }
  func() {
    // console.log(`ID: ${this.id}, Name: ${this.name}`)
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}
const saravanan11 = new Rectangle(1, "SARAVANAN");
// console.log(saravanan11)
// saravanan11.func();
// saravanan11.id = 7;
console.log(saravanan11.func());
class Emp extends Rectangle {
  constructor(id, name, position) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Emp(3, "saravanansivakumar", "SDE1: Frontend Developer");
console.log(emp);
console.log(emp.name);
console.log(emp.position);
document.write("saravanan");
