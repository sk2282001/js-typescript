const saravanan = {
    firstname: 'saravanan',
    lastname: 'sivakumar',
    age: 2024 - 2001,
    job: 'teacher',
    friends: ['shiva', 'murugan', 'udhai']
}
console.log(saravanan)
console.log(saravanan.firstname)
console.log(saravanan['firstname'])
console.log(saravanan.friends)
console.log(saravanan.friends[0]);

const nameKey = "name";

console.log(saravanan['first' + nameKey]);
console.log(saravanan['last' + nameKey]);

// console.log(saravanan.'first' + nameKey); it's doesnt work

const seeDetails = prompt('what do you want to know about jonas? choose between firstname, lastname, age, job, friends');

// console.log(saravanan.seeDetails);
console.log(saravanan[seeDetails]);

if (saravanan[seeDetails]) {
    console.log(saravanan[seeDetails]);
} else{ 
    console.log('wrong request! Choose between firstname, lastname, age, job, friends');
}

saravanan.location = 'chennai';
saravanan['email'] = 'saravanan2282001@gmail.com';
console.log(saravanan);

console.log(`${saravanan.firstname} has ${saravanan.friends.length} friends, and his best friend is called ${saravanan.friends[0]}`);