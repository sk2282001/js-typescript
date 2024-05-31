const cutPieces = function (fruit){
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {

    //function calling other function
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
};

console.log(fruitProcessor(2, 3));


// normal function or anatomy function

function saravanan(dob, fname){
    const age = 2024 - dob;
    console.log(`${fname} is ${age} years old`);
    return age;
}
const age = saravanan(2001, 'Saravanan');
