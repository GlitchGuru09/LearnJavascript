// const user = {
//     username: "shrey Vernekar",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log(this.signedIn);
//         console.log(this);
//     }
// }

// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetails());

function user(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this. isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${username}.`);
    }
    return this;
}

const userOne = new user('shrey',12,true)
const userTwo = new user('manuja',11,false)
console.log(userOne instanceof user);
console.log(userOne.constructor); //gives refernce of its own function that is in this case user
console.log(userTwo.greeting());
