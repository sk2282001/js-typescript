//AND OR NOT

//Logicl Operators
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
// if (hasDriverLicense && hasGoodVision) {
//     console.log("You are get to access driver licenses");
// } else {
//     console.log(" --Not Access-- ");
// }

// if (hasDriverLicense || hasGoodVision) {
//     console.log("You are get to access driver licenses");
// } else {
//     console.log(" --Not Access-- ");
// }

// if (hasDriverLicense !== hasGoodVision) {
//     console.log("You are get to access driver licenses");
// } else {
//     console.log(" --Not Access-- ");
// }

// if (!hasGoodVision) console.log("yeah good vision");

console.log(!hasGoodVision);

// const shouldDrive = hasDriverLicense && hasGoodVision;

if (hasDriverLicense && !hasGoodVision) {
    console.log("saravanan is able to drive");
}
else {
    console.log("saravanan is not able to drive");
}

const isApply = false;
console.log(hasDriverLicense && hasGoodVision && isApply);

if (hasDriverLicense && !hasGoodVision && !isApply) {
    console.log("access");
}
else {
    console.log("not access");
}

// Coding Challenges

const scoreDolphines = (98 + 100 + 23) / 3;
const scorekoalas = (78 + 98 + 23) / 3;
console.log(scoreDolphines, scorekoalas);

if (scoreDolphines > scorekoalas) {
    console.log("Hey Dolphie you got high score");
}
else {
    console.log("Nothing to say");
}

//switch cases

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log("saravanan its nice day");
//         break;

//     default:
//         break;
// }

// statements and expressions

//Ternary Operator

// const age = 23;

// age >= 18 ? console.log("i like to drink wine 👏") : console.log("not to drink");


//coding challenge

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? 0.15 : 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


//Activating Strict mode
// 'use strict';

// let hasDriverLic = false;
// const passTest = true;

// if (passTest) hasDriverLic = true;
// if (hasDriverLic) console.log("I can Drive :D)");


//Functions

function logger() {
    console.log("my name is saravanan");
}
// calling  / running / invoking function
logger();
logger();
logger();

function fruitsvarious(apple, oranges) {
    console.log(apple, oranges);
    const juice = `Juice with ${apple} apples and ${oranges} oranges`
    return juice;
    // console.log(juice);
}
// fruitsvarious(4, 3);
const applejuice = fruitsvarious(4, 3);
console.log(applejuice);
