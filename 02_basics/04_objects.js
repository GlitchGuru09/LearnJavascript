//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shrey"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "shrey@gamil.com",
    fullname: {
        userFullname: {
            firname: "Shrey",
            lastname: "Vernekar"
        }
    }
}
console.log(regularUser.fullname.userFullname.firname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3=Object.assign({},obj1, obj2)
console.log(obj3);

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "shrey@gmail.com"
    },
    {
        id: 1,
        email: "shrey@gmail.com"
    },
    {
        id: 1,
        email: "shrey@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));