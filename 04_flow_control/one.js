// const temprature = 41;

// if(temprature === 41){
//     console.log("temprature is 41");
// }
// else{
//     console.log("temprature is greater then 50");
// }

// console.log("executed");

// const score = 200;

// if(score > 100){
//     let power = "fly";
//     console.log(`user has power to ${power}`);
// }

// console.log(`user has power to ${power}`);

// const balance = 1000;
// if(balance < 500){
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");
// }else{
//     console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course.");
}

if( loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In.");
}