// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`characters are: ${greet}`);
}


// maps **it is known for returning unique values**

const map = new Map()
map.set("IN","india")
map.set("USA","united states of america")
map.set("FR","france")
map.set("FR","france")

// console.log(map);


for (const [key,value] of map) {
    // console.log(key, "=", value);
}


//cannot iterate objects like this
// const myObj = {
//     "game1" : "nfs",
//     "game2" : "cod"
// }

// for (const [key, value] of myObj) {
//     console.log(key, "=" ,value);
// }