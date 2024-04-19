// const userEmail = []

// if(userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//to check if array is empty
const arr = []

if(arr.length === 0){
    console.log("array is empty.");
}

//to check if object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty.");
}



/* false == 0 is true
false == "" is true
0 == "" is true 
*/


//Nullish coalescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

//terniary operators

// conditon ? true : false 

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");