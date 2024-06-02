"use strict";
// var currentYear;
const Person = function (firstName, birthYear, currentYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

let person = new Person("saravanan", 2001);
let saravanan = new Person("udhai", 1997);
let udhai = new Person("siva", 2000);
console.log(person);
console.log(saravanan);
console.log(udhai);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
person.calcAge();
saravanan.calcAge();
udhai.calcAge();
