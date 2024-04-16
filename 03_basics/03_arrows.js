const user = {
    username: "shrey",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website.`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this); // ***because we are in node enviroment "console.log(this)" will give empty object {}***



// function chai(){
//     let username = "shrey"
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "shrey"
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "shrey"
//     console.log(this);
// }

// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(2,3));

// const addTwo = (num1,num2) => ( num1 + num2 )

// console.log(addTwo(2,3));


const addTwo = (num1,num2) => ( {username: "shrey"} )

console.log(addTwo(2,3));

