const user = {
    username: "shrey",
    email: "shrey@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user
console.log(teacher.username);

console.log(TASupport.isAvailable);


//modern syntax 

Object.setPrototypeOf(teachingSupport,teacher);
console.log(teachingSupport.makeVideo);