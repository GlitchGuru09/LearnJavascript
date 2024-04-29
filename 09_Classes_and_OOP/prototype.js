let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


//object is the core element of all the functions, arrays, string goes throght 
//so if the give the core the power to access all functtions, arrays, string so this function can access them
Object.prototype.shrey = function(){ 
    console.log("shrey is present in all objects");
}

Array.prototype.heyShrey = function(){
    console.log("shrey says hello");
}

// heroPower.shrey()
myHeros.shrey()
myHeros.heyShrey()

// heroPower.heyShrey()

