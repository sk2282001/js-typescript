// //create object
// const person = {
//   firstname: "saravanan",
//   lastname: "Doe",
//   age: 22,
//   address: {
//     street: "05 ganga nagar",
//     city: "Chennai",
//     state: "TN",
//   },
// };

//create constructor new keyword for object

// let person2 = new Object();
// person2.firstname = 'sivakumar'
// console.log(person2.firstname)

// // constructor function

// function Person(firstname, age){
//     this.firstname = firstname;
//     this.age = age;
// }
// let person1 = new Person('saravanan', 22);
// console.log(person1)

// //Accessing Properties
// //1. Dot Notation
// console.log(person.firstname);

// //2.bracket notation
// console.log(person["age"]);

// //modift prop
// // adding & update
// person2.age = 31;
// // person2.address.state = 'BNG';
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }
// let person3 = new Person("John", "Doe", 30);
// for (const key in person3) {
//   if (Object.hasOwnProperty(key)) {
//     console.log(key + ":  " + person3[key]);
//   }
// }
// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// let person3 = new Person("John", "Doe", 30);

// for (const key in person3) {
//   //   if (Object.hasOwnProperty.call(person3, key)) {
//   console.log(key + ": " + person3[key]);
//   //   }
// }

const person = {
  firstname: "saravanan",
  lastname: "Doe",
  age: 22,
  address: {
    street: "05 ganga nagar",
    city: "Chennai",
    state: "TN",
  },
};

console.log(person.lastname);
