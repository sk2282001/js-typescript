// let js = "Hi Saravanan"
// if (js === 'Hi Saravanan') alert("Javscript have Fun!");
// console.log("saravanan");

// let age = 12;
// age = 38;

// lastName = "saravanan"
// console.log(lastName);

//Javascript Basic operators
// const now = 86;
// const agemin = now - 56;
// const agemin2 = now - 67;
// console.log(agemin + "\n" + agemin2);
// console.log(agemin * 2, agemin2 / 10, 2 ** 3); // 2 * 2 * 2 

// const fname = 'saravanan';
// const lname = 'sivakumar';

// console.log(fname + ' ' + lname);

// let x = 12 + 4;
// x += 23;
// console.log("Total is: " + x);

// javascript values and variables
// let country = "india";
// let continent = "delhi";
// let poupulation = "50";
// console.log(country);
// console.log(continent);
// console.log(poupulation);

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof poupulation);
// console.log(typeof language);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x++;
// x--;
// console.log(x);

// left to right operators reference datatype

// let x, y;
// x = y = 25 - 10 - 5
// console.log(x, y);

// //task 1

// const masssaravanan = 45;
// const heightsaravanan = 1.70;
// const masssunil = 65;
// const heightsunil = 1.90;

// const BMIsaro = masssaravanan / heightsaravanan ** 2;
// const BMISunil = masssunil / (heightsunil * heightsunil)
// console.log(BMIsaro, BMISunil);

// // console.log(BMISunil);
// // console.log(BMIsaro);
// const saroHigherBMI = BMIsaro > BMISunil
// console.log(saroHigherBMI);
// if (BMISunil > BMIsaro) {
//     console.log(`sunil BMI ${BMISunil} is Higher than saravanan (${BMIsaro})!`);
// }
// else {
//     console.log(`saravanan BMI (${BMIsaro}) is Higher than sunil (${BMISunil})!`);
// }

// Type conversion and Coercion

// const inputYear = Number('1991');
const inputYear = '1991';
const inputYear1 = 1991;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear1) + 18);
console.log(Number(inputYear));
console.log(inputYear1);
console.log(inputYear + 30);
console.log(Number('saravanan'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion

console.log('I am ' + 22 + ' years old');
//Minus operators means triggers opposite conversion
//Strings are converted to number
console.log('23' - '12' - 2);
console.log('23' / '12' / 2);
console.log('23' * '2');
console.log('23' / '2' / 2);
console.log('23' + '34' + 3); // this strings will be concatinated
// console.log(true && null);
console.log(true || null);
// console.log(0 * null);
console.log(7 * null)
console.log(7 / null)
console.log(0 == +null);
console.log(0 == null);

console.log('10' % '1');
//BODMOS guess number game 
let number = '10' + 1;
number = number - 1;
console.log(number);
