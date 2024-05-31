// if else statements
// const age = 15;
// // const isAged = age >= 18;

// // if (isAged) {
// //     console.log("saravanan is an adult so he have access");
// // }
// if (age >= 18) {
//     console.log("Yeah its truth");
// }
// else {
//     const yearsleft = 18 - age;
//     console.log(`saravnan is too young, wait another ${yearsleft} year`);
// }
// // console.log(isAged);

// const birthYear = 2001;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(`saravanan is ${century}th century`);

// console.log("Hi saravana 👏❤");

// const masssaravanan = 45;
// const heightsaravanan = 1.70;
// const masssunil = 65;
// const heightsunil = 1.90;

// const BMIsaro = masssaravanan / heightsaravanan ** 2;
// const BMISunil = masssunil / (heightsunil * heightsunil)
// const sunilHigherBMI = BMIsaro > BMISunil;
// console.log(BMISunil, BMIsaro);

// if (BMIsaro > BMISunil) {
//     console.log(`saro BMI (${BMIsaro}) is higher than Sunil Bmi (${BMISunil})`);
// }
// else {
//     console.log(`Sunil Bmi (${BMISunil}) is higher than Saro BMI(${BMIsaro})`);
// }


//truthy and falsy values

// five falsy values: 0, '', null, NaN, Undefined

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('saravanan'));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(''));
const money = 0;

if (money) {
    console.log("Dont spend it all");
}
else {
    console.log("you shuold get a job")
}

let height;
if (height) {
    console.log("Hey height is defined");
} else {
    console.log("height undefined");
}

// Equal too operator == vs, ===

const age = 34;
if (age == 34) {// Because this condition true
    console.log("hey you are passed");
}
else {
    console.log("hey its too low")
}

const fav = Number(prompt("whats your favourite number?"));
console.log(fav);
console.log(typeof fav);
if (fav === 34) {
    console.log("hey your gess is write");
}
else if (fav === 7) {
    console.log('7 is also a cool number');
}
else if (fav == 9) {
    console.log("9 is also a cool number");
}
else {
    console.log("Number is not 23 or 7 or 9");
}

if (fav !== 23) console.log("Why not 23");