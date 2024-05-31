// // function outer() {
// //   let message = "hello";
// //   function inner() {
// //     console.log(message);
// //   }
// //   inner();
// // }
// // // message = "dsbfjm";
// // outer();

function sayHello() {
  //   alert("Hello");
  //window.alert("Hello");
}
setTimeout(sayHello, 3000); // args1: callback, args2:delay
// // console.log(typeof null);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const book = secureBooking();
book();
book();

// console.dir(book);

// example Closure

//1
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

message = "Goodbye";

outer();

//2
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`Current count: ${counter.getCount()}`);

//3
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);
