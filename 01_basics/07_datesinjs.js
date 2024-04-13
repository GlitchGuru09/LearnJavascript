// dates 

const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("2024-01-09")
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
console.log(newDate.getDate());


console.log(newDate.toLocaleString('default', {
    weekday: "short"
}));