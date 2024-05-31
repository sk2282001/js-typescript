// class declaration
// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   greet() {
//     console.log(
//       `hello, my name is ${this.name} and i am ${this.age} years old`
//     );
//   }
// }

// creating object
// syntax
// const person1 = new Person("Alice", 22);
// console.log(person1);
// person1.greet();

// encapsulation
// private fields and methods(using #)
// syntax

// class Person1 {
//   #input;

//   constructor(name, age, input) {
//     this.name = name;
//     this.age = age;
//     this.#input = input;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and ${this.age} yeas old`);
//   }

//   #getInput() {
//     return this.#input;
//   }

//   displayInput() {
//     console.log(`Input: ${this.#getInput()}`);
//   }
// }

// const person2 = new Person1("saravanan", 23, "1234-3456-7890");
// person2.greet();
// person2.displayInput();

// inheritance
// Base class(Parent)
// syntax

class Animal {
  constructor(name, age, email) {
    this.name1 = name;
    this.age2 = age;
    this.email3 = email;
  }

  speak() {
    console.log(`${this.name1} makes a noise`);
  }
}

// Derived class (Child)

class Tiger extends Animal {
  constructor(name1, name2, breed) {
    //   this.name = name;
    super(name1, name2);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name1} barks ${this.age2}`);
  }
}

const dog1 = new Tiger("alabai", 22, "dubai breed");
dog1.speak();

// 4. Polymorphism
// Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. The child class can override methods from the parent class.

// Method Overriding:

// javascript
// Copy code
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(`${this.name} meows.`);
//   }
// }

// const animals = [new Dog("Rex"), new Cat("Whiskers")];
// animals.forEach((animal) => animal.speak());
// Output:
// Rex barks.
// Whiskers meows.
// 5. Abstraction
// Abstraction means hiding the complexity and showing only the essential features of the object.

// Abstract Classes and Methods:

// JavaScript doesn't have built-in support for abstract classes like some other languages. However, you can simulate it:

// javascript
// Copy code
// class Vehicle {
//   constructor() {
//     if (new.target === Vehicle) {
//       throw new TypeError("Cannot construct Vehicle instances directly");
//     }
//   }

//   start() {
//     throw new Error("Method 'start()' must be implemented.");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     console.log("Car started.");
//   }
// }

// const car1 = new Car();
// car1.start(); // Output: Car started.
// const vehicle1 = new Vehicle(); // Error: Cannot construct Vehicle instances directly
// References and Further Reading
// MDN Web Docs - Classes:

// MDN Classes
// MDN Web Docs - Inheritance:

// MDN Inheritance
// MDN Web Docs - Private class fields:

// MDN Private class fields
// MDN Web Docs - Polymorphism:

// MDN Polymorphism
// JavaScript.info - Object-oriented programming:

// JavaScript.info OOP

// classes syntax
// class syntax
// class Rectangle {
//   constructor(_width, _height) {
//     this.width = _width;
//     this.height = _height;
//   }
// }

// //expression anonymus
// const Rectangle = class {
//   constructor(_width, _height) {
//     this.width = _width;
//     this.height = _height;
//   }
// };

// //expression class

// const Rectangle = class Rectangle2 {
//   constructor(_width, _height) {
//     this.width = _width;
//     this.height = _height;
//   }
// };

// // methods definition in class

// const obj = {
//   boo() {
//     return "IT core";
//   },
// };

//classes in private field

class Person3 {
  #name;
  #age;

  constructor(_name, _age) {
    this.#name = _name;
    this.#age = _age;
  }

  introduceSelf() {
    console.log(`Hi, I am ${this.#name}, ${this.#age} years old`);
  }
}

let store = new Person3("Saravanan", 22);
store.name = "Udhai";
store.age = 24;
store.introduceSelf();

function saravanan(input) {
  console.log("My name is" + " " + input);
}
saravanan("saravanan");

const obj = [
  {
    name: "saravanan",
    age: 22,
    email: "saravanan2282001@gmail.com",
  },
];

for (const key in obj) {
  for (const iterator of key) {
    console.log(iterator[key]);
  }
}
