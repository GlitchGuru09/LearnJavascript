//while loop

// let index = 0;
// while(index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2;
// }

const myArray = ["luffy","zoro","sanji","usopp","franky","nami","robin","brook"]

let index = 0;

while( index < myArray.length){
    // console.log(`value of array is ${myArray[index]}`);
    index = index + 1;
}

let score = 1;

do {
    console.log(`value is ${score}`);
    score++
} while (score<=10);