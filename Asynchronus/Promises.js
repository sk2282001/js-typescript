// // Promise = An Object that manages asynchronous operations.
// //                    Wrap a Promise Object around {asynchronous code}
// //                    "I promise to return a value"

// // DO THESE CHORES IN ORDER

// // 1. GO TO JAGGING
// // 2. 1 HOUR GYM
// // 3. GO TO THE KITHCHEN

// function jagging() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const runjag = true;
//       if (runjag) {
//         resolve("go to jagging 🚶‍♂️ 🚶‍♀️ 🏃‍♀️ 🏃‍♂️");
//       } else {
//         reject("you didn't jagging");
//       }
//     }, 1000);
//   });
// }
// function gym() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const gymgo = true;
//       if (gymgo) {
//         resolve("1 hour gym 🏋️‍♂️ 💪");
//       } else {
//         reject("You didn't go to the gym");
//       }
//     }, 500);
//   });
// }
// function kithchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cleanKithchen = true;
//       if (cleanKithchen) {
//         resolve("go to the kithchen and clean 👌");
//       } else {
//         reject("You didn't clean the kithchen");
//       }
//     }, 3500);
//   });
// }

// // jagging().
// //   .then((value) => {
// //     console.log(value);
// //     return gym();
// //   })
// //   .then((value) => {
// //     console.log(value);
// //     return kithchen();
// //   })
// //   .then((value) => {
// //     console.log(value);
// //     console.log("You all finished the chores");
// //   })
// Promise.all([jagging(), gym(), kithchen()])
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all chores");
//   })
//   .catch((err) => console.error(err));

// let posts = [
//   { name: "saravanan", email: "saravanan2282001@gmail.com" },
//   { name: "Udhai", email: "udayakumat2191997@gmail.com" },
// ];

// // function createPosts(post) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       posts.push(post);

// //       let error = true;

// //       if (!error) {
// //         resolve();
// //       } else {
// //         reject("Error: something went wrong");
// //       }
// //     }, 1500);
// //   });
// // }
// // createPosts({ name: "sivakumar", email: "saravanan2282001@gmail.com" });

// // console.log("Test Start");
// // setTimeout(() => console.log("0 sec timer"), 0);
// // Promise.resolve("resolve promise 1").then((res) => console.log(res));
// // console.log("Test End");

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log("lottery draw is happening");
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve("You Win 🤴");
// //     } else {
// //       reject(new Error("You lost your money"));
// //     }
// //   }, 2000);
// // });

// // lotteryPromise
// //   .then((result) => console.log(result))
// //   .catch((err) => console.error(err));

// const lotteryTicket = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN");
//     } else {
//       reject("You lost your money");
//     }
//   }, 2000);
// });

// lotteryTicket
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
console.log("Getting Position Background");
