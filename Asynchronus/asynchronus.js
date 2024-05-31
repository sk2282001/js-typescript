// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence.
//                     Ex. Access a database
//                            Fetch a file
//                            Tasks that take time
//                     (start now, finish sometime later)

// console.log("START");
// setTimeout(() => console.log("This step is aysnchronus"), 5000);
// console.log("END");

// // callbacks

// const posts = [
//   { title: "The One", body: "This is post one" },
//   { title: "The Two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach((post, index, arr) => {
//       output += `<li>${index + 1}: ${post.title}</li>`;
//       document.body.innerHTML = output;
//     });
//   }, 1000);
// }

// function createPosts(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPosts({ title: "The Three", body: "This is post two" }, getPosts);

//callback Hell
function task1(callback) {
  setTimeout(() => {
    console.log("task 1 completed");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task 2 completed");
    callback();
  }, 2000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task 3 completed");
    callback();
  }, 1500);
}
function task4(callback) {
  setTimeout(() => {
    console.log("task 4 completed");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("All task are completed"));
    });
  });
});
// setTimeout(() => {
//   console.log("All task are Completed");
// }, 1000);
console.log("All task are completed");

console.log("Asynchronus");
setTimeout(() => {
  console.log("Web API");
}, 1000);
const wait = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You Win");
  } else {
    reject("You lost your money");
  }
});

wait.then(
  (result) => console.log(result),
  (err) => console.error(err)
);
