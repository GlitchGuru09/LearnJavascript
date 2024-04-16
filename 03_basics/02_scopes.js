// let a = 300;

// if(true){
//     let a = 10;
//     const b = 20;
//     console.log(`inner: ${a}`);
// }

// console.log(a);

function one(){
    const username = "shrey"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username ="shrey"
    if(username === "shrey"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//*******************************interesting**************************************
console.log(addone(5));

function addone(num){
    return num + 1;
}


// console.log(addtwo(5)); ****cannot access the function when you declare functions like this.****
const addtwo =  function(num){
    return num + 2;
}

console.log(addtwo(5));