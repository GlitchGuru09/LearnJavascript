// const user = {
//     username: "shrey",
//     email: "shrey@gmail.com"
// }

// const teacher = {
//     makeVideo: true
// }

// const teachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'js assignment',
//     fullTime: true,
//     __proto__: teachingSupport
// }

// teacher.__proto__ = user
// console.log(teacher.username);

// console.log(TASupport.isAvailable);


// //modern syntax 

// Object.setPrototypeOf(teachingSupport,teacher);
// console.log(teachingSupport.makeVideo);

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is :${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        }

        addCourse(){
            console.log(`a new course is added by ${this.username}`);
        }
}


const printMe = new Teacher("nitisha", "nitisha@gmail.com","1234")

printMe.logMe()
printMe.addCourse()