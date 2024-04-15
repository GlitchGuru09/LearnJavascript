// functions

function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
}

// sayMyName();

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(3,4);

function addTwoNumber(num1,num2){
    // let result = num1+num2;
    // return result;

    return num1+num2;
}

const ans = addTwoNumber(3,4)
// console.log("ans: ",ans);


// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username.");
//         return;
//     }
//     return `${username} just logged in.`
// }

// console.log(loginUserMessage("shrey"));


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(20,300,1000));

const user = {
    username: "divya",
    price: 399
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user);
//or
// handleObject({
//     username: "sam",
//     price: "299"
// })


myArray = [100,400,900,300]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100,200,300,400]));
