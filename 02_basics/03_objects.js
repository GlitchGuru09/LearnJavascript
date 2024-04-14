//singleton
//object.create

//objects literals

const mySym = Symbol("key1");

const jsUser = {
    name: "shrey",
    "full name": "shrey vernekar",
    [mySym]: "myKey1",
    age: 22,
    location: "Goa",
    email: "shreyvernekar09@gmail.com",
    idLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// Object.freeze(jsUser);
// jsUser.email = "karen03@gmail.com"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello JS user.");
}
console.log(jsUser.greetings());

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingsTwo());