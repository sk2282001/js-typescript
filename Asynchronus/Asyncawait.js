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

// async function doChores() {
//   const walkjagging = await jagging();
//   console.log(walkjagging);

//   const goGym = await gym();
//   console.log(goGym);

//   const cleanKithchen = await kithchen();
//   console.log(cleanKithchen);
// }

// doChores();

// async function fetchapi() {
//   const response = await fetch("http://example.com/movies.json");
//   const movies = await response.json();
//   console.log(movies);
// }
// fetchapi();

console.log("1");
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
};
whereAmI("portugal");
console.log("2");
// F u n c t i o n C l o s u r e
// F u n c t i o n C a l l b a c k
// F u n c t i o n E x p r e  s i o n
// F u n c t i o n D e c l a rs t i o n
// F u n c t i o n A n n o n y m u s
// F u n c t i o n A r r o w
