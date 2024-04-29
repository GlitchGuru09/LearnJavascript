function setUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    //in this case the setUserName function gets excecuted from the excecution context 
    // and tell the createUser function to keep my data(username) with you by using 'this keyword'
    //and we user call method to call the outter function in this function.
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const printMe = new createUser("shrey", "shrey@gmail.com", "1234")
console.log(printMe);