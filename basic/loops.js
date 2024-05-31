// for (let i = 1; i <= 10; i++) {
//   console.log(`lift has minimum height 🧑${i}`);
// }

// console.log("Arrays are not an arrays");

//looping arrays

const saravanan = [
  "sunil",
  "udhai",
  "kishore",
  2024 - 2001,
  "teacher",
  ["kumaran", "hari", "vicky"],
  true,
];

// console.log(saravanan[0])

// const types = [];

// for (let i = 0; i < saravanan.length; i++) {
//   //reading from saravanan array
//   console.log(saravanan[i], typeof saravanan[i]);

//   //filling types of array
//   //    types[i] = typeof saravanan[i];
//   types.push(typeof saravanan[i]);
// }

// console.log(types);

// const years = [2001, 2002, 2003, 2004, 2005];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log("___ ONLY STRINGS ___");
// for (let i = 0; i < saravanan.length; i++) {
//     // if (typeof saravanan[i] !== 'string') break;
//     if (typeof saravanan[i] !== 'string') continue;
//     console.log(saravanan[i], typeof saravanan[i]);
// }

// console.log("___ BREAK WITH NUMBERS ___");
// for (let i = 0; i < saravanan.length; i++) {
//     // if (typeof saravanan[i] !== 'string') break;
//     if (typeof saravanan[i] === 'number') break;
//     console.log(saravanan[i], typeof saravanan[i]);
// }

// loop backwards and loop in loop

// for (let i = saravanan.length - 1; i >= 0; i--) {
//   console.log(i, saravanan[i]);
// }

// for (let ii = 1; ii <= 3; ii++){
//     console.log(`------------Starting exercise ${ii}`);

//     for (let i = 0; i < 6; i++) {
//         console.log(`Exercise ${ii}: lift weight is maxmium 2000kg ${i}`);
//     }
// }

//while
// let reptiles = 1;
// while(reptiles <= 10){
//     console.log(`lifting weight set for low ${reptiles} 👩‍🦰`);
//     reptiles++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log("Loop is about to end......");
}

//challenge

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 176, 45, 67, 34, 440, 1100, 87, 56, 295];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvg = function (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum / 3);
    // console.log(sum / arr.length);
    return sum / arr.length;
}
console.log(calcAvg([2, 3, 4]));
console.log(calcAvg(totals)); 