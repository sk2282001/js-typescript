const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:06:42"));
console.log(new Date("December 12,2024"));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(Date.now());
console.log(new Date(2142237180000));
console.log(new Date(1715596580957));
