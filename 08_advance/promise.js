const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //db calls, network calls
    setTimeout(function () {
        console.log("async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){

        resolve({userName: "shrey", email: "shreyvernekar09@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "shrey", email: "shrey@gmail.com"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally( () => {
    console.log('the promise is either resolved or rejected.');
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'shrey', password: "1234"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        console.log(response.username);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/GlitchGuru09')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})