// function myltiplyBy5(num){
//     this.num = num
//     return num * 5;
// }

// myltiplyBy5.power = 2;

// console.log(myltiplyBy5(5));
// console.log(myltiplyBy5.power);
// console.log(myltiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe =function(){
    console.log(`${this.score}`);
}

const shrey = new createUser("shrey", 8)
const manuja = new createUser("manuja",8)

shrey.printMe();